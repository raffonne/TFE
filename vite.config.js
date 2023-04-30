// // const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default {
//     root: './src/',
//     publicDir: '../pages/',
//     base: './',
//     server:
//     {
//         host: true,
//         // open: !isCodeSandbox // Open if it's not a CodeSandbox
//     },
//     // build: {
//     //     rollupOptions: {
//     //         input: {
//     //             home: resolve(__dirname, '/index.html'),
//     //             about: resolve(__dirname, '/about.html'),
//     //             experience: resolve(__dirname, '/experience.html'),
//     //         }
//     //     }
//     // }
//     build:
//     {
//         outDir: '../dist',
//         emptyOutDir: true,
//         sourcemap: true
//     },

// }






import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/',
  publicDir: '../static/',
  base: './',

  server: {
    host: true,
  },
  
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, './src/index.html'),
        experience: resolve(__dirname, './src/experience.html'),
      }
    }
  },
});