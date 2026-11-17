# 🚀 Ejercicios Prácticos de JavaScript Moderno y DOM

Colección progresiva de aplicaciones interactivas construidas con **JavaScript puro (Vanilla ES6+)**, **HTML5 semántico** y **Sass**, enfocada en el dominio del DOM, arquitectura modular y despliegue continuo.

🌐 **[Ver Demo en Vivo (GitHub Pages)](https://jesusvillarroel.github.io/mi-repositorio-js/)**


---

## 🏗️ Arquitectura y Tecnologías

* **Bundler Multipágina (MPA):** Configurado con **Vite** (`rollupOptions.input`) para compilar múltiples vistas HTML de forma independiente.
* **Estilos Modulares (Sass):** Implementación de la **arquitectura 7-1** utilizando `@use`, variables globales en `abstracts/`, componentes reutilizables en `components/` y estilos específicos en `pages/`.
* **JavaScript Modular:** Separación clara de responsabilidades por ejercicio (`logic.js` para reglas de negocio puras, `ui.js` para manipulación del DOM e `index.js` como coordinador de eventos), protegido mediante cláusulas de guarda para entornos multipágina.
* **CI/CD Automatizado:** Flujo de integración y despliegue continuo con **GitHub Actions** que compila y publica automáticamente en **GitHub Pages** tras cada `push` a `main`.

---

## 📋 Ejercicios Completados

| # | Ejercicio | Conceptos Clave Aplicados | Demo |
| :- | :--- | :--- | :---: |
| **01** | **Cambiar Fondo** | Eventos `click`, manipulación de estilos en el DOM y generación aleatoria (`Utils/color.js`). | [Ver](https://github.iojs_ejercicio1.html) |
| **02** | **Contador de Clics** | Manejo de estado aislado (`let contadorClick = 0`) y actualización reactiva de texto. | [Ver](https://github.iojs_ejercicio2.html) |
| **03** | **Lista Dinámica** | Delegación de eventos, creación/eliminación de nodos y clases dinámicas (`.has-content`). | [Ver](https://github.iojs_ejercicio3.html) |
| **04** | **Buscador en Tiempo Real** | Evento `input`, filtrado dinámico de colecciones y renderizado condicional. | [Ver](https://github.iojs_ejercicio4.html) |
| **05** | **Calculadora Básica** | Arquitectura de 3 capas (`logic` / `ui` / `index`), atributos `data-*`, `<output>` y validación de errores. | [Ver](https://github.iocalculadora.html) |
| **06** | **Temporizador** | Control de intervalos (`setInterval` / `clearInterval`), formateo `HH:MM:SS` con `padStart` y estado de botones. | [Ver](https://github.iotemporizador.html) |

---

## 💻 Instalación y Uso Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

```bash
# 1. Clonar el repositorio
git clone https://github.com

# 2. Entrar al directorio del proyecto
cd mi-repositorio-js

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo con Vite
npm run dev
```

---

## 🎯 Próximos Pasos

* [ ] Completar la serie de ejercicios prácticos en Vanilla JS.
* [ ] Documentar funciones puras con **JSDoc**.
* [ ] Migrar los módulos de lógica e interfaz a **TypeScript** con tipado estricto del DOM.
