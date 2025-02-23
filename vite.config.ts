import styleX from '@stylexjs/rollup-plugin';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const getFilesRecursively = (dir: string) => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });

  return results;
};

const dir = path.resolve(__dirname, 'src');

const getComponentEntries = (dir: string) => {
  const allFiles = getFilesRecursively(dir);
  const componentFiles = allFiles.filter(
    (file) => file.endsWith('.tsx') || file.endsWith('.ts'),
  );

  const entry = componentFiles.reduce((acc, file) => {
    const relative = path.relative(dir, file);
    const entryName = relative.replace(/\.(tsx|ts)$/, '');
    acc[entryName] = file;
    return acc;
  }, {});
  return entry;
};

const reactPlugin = react({
  babel: { configFile: true },
  jsxRuntime: 'classic',
});

const dtsPlugin = dts({
  entryRoot: 'src',
  insertTypesEntry: true,
  outDir: ['dist/es', 'dist/cjs'],
  tsconfigPath: './tsconfig.json',
});

const styleXPlugin = styleX({
  dev: process.env.NODE_ENV === 'development',
  fileName: 'styles.css',
  useCSSLayers: false,
});

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        //index: path.resolve(__dirname, 'src/index.ts'),
        ...getComponentEntries(dir),
      },
      fileName: (format, name) =>
        `${format}/${name}.${format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@radix-ui/react-ssr',
        '@radix-ui/themes',
        '@radix-ui/react-form',
        '@radix-ui/react-icons',
      ],
      output: {
        banner: (chunk) => {
          if (!chunk.facadeModuleId) return '';
          const code = fs.readFileSync(chunk.facadeModuleId, 'utf-8');
          return code.includes("'use client'") || code.includes('"use client"')
            ? "'use client';"
            : '';
        },
        globals: {
          '@radix-ui/themes': 'RadixUIThemes',
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    target: 'esnext',
  },
  plugins: [reactPlugin, styleXPlugin, dtsPlugin],

  resolve: {
    alias: {
      '@': dir,
    },
  },
});
