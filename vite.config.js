import { defineConfig } from "vite";
import { resolve } from "path";
const rootDir = new URL('.', import.meta.url).pathname;
export default defineConfig({
  base: '/mi-repositorio-js/',
  build: {
    rollupOptions: {
      input: {
        
        main: resolve(rootDir, 'index.html'),      
        ejercicio1: resolve(rootDir, 'js_ejercicio_1.html') 
      }
    }
  }
});
