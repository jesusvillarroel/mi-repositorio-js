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
        ejercicio3: resolve(import.meta.dirname, 'js_ejercicio3.html'),
        ejercicio4: resolve(import.meta.dirname, 'js_ejercicio4.html'),
        calculadora: resolve(import.meta.dirname, 'calculadora.html'),
        temporizador: resolve(import.meta.dirname, 'temporizador.html'),
        generador: resolve(import.meta.dirname, 'generador.html'),
        contador: resolve(import.meta.dirname, 'contador-palabras.html')     
      }
    }
  }
});
