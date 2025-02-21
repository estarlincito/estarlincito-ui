//import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// Get all component files from the components folder dynamically
const getFilesRecursively = (directory: string) => {
  let results: string[] = [];
  const list = fs.readdirSync(directory);
  list.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      if (filePath.includes('types')) {
        return;
      }
      results.push(filePath);
    }
  });

  return results;
};
const componentsDir = path.resolve(__dirname, 'src');
const allFiles = getFilesRecursively(componentsDir);
const componentFiles = allFiles.filter(
  (file) => file.endsWith('.tsx') || file.endsWith('.ts'),
);

const entry = componentFiles.reduce((acc, file) => {
  const relative = path.relative(componentsDir, file);
  const entryName = relative.replace(/\.(tsx|ts)$/, '');
  acc[entryName] = file;
  return acc;
}, {});

export default defineConfig({
  plugins: [
    //react({ jsxRuntime: 'automatic' }),
    dts({
      // Use the src directory as the root for declarations so that the folder structure is preserved
      entryRoot: componentsDir,
      // This will insert a types entry in package.json (optional)
      insertTypesEntry: true,
      // You can specify output directories if needed; here, we generate declarations along with the JS outputs
      outDir: ['dist/esm', 'dist/cjs'],
    }),
  ],
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'), // Main export file
        ...entry, // Dynamically added components
      },
      // Generate both ESM and CJS
      fileName: (format, entryName) => {
        return format === 'es' ? `esm/${entryName}.js` : `cjs/${entryName}.js`;
      },

      formats: ['es', 'cjs'],
      name: '@estarlincito/ui', // Define file names
    },
    // Don't bundle React

    rollupOptions: {
      external: ['react', 'react-dom', '@radix-ui/themes'],
      output: {
        esModule: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        interop: 'auto',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
