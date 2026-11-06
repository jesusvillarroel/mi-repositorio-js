import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/mi-repositorio-js/',
  build: {
    rollupOptions: {
      input: {
        
        main: resolve(import.meta.dirname, 'index.html'),      
        ejercicio1: resolve(import.meta.dirname, 'js_ejercicio1.html'), 
        ejercicio2: resolve(import.meta.dirname, 'js_ejercicio2.html'),
        ejercicio3: resolve(import.meta.dirname, 'js_ejercicio3.html')  
      }
    }
  }
});
