import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      //fileName: (format) => `title.${format}.js`,
      fileName: (format) => `index.js`,
    },
    // rollupOptions: {
    //   input: {
    //     title: './src/title.tsx',
    //     index: './src/index.ts',
    //   },
    //   output: {
    //     dir: 'dist',
    //     entryFileNames: '[name].js',
    //     format: 'esm',
    //   },
    // },
  },
  plugins: [react()],
  external: ['react', 'react-dom'],
  output: {
    globals: {
      react: 'React',
    },
  },
  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       { dest: '', src: './src/manifest.json' },
  //       { dest: '', src: './src/popup.html' },
  //     ],
  //   }),
  // ],
});
