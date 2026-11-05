# 🚀 Nombre de tu Proyecto

Una pequeña descripción de lo que hace este nuevo sitio web.

🔗 **[Ver el sitio web en vivo aquí](https://github.io)**

---

### 🚨 PASOS OBLIGATORIOS AL INICIAR (¡Lee esto primero!)

Cada vez que dupliques esta plantilla para un nuevo proyecto, debes hacer estos 3 ajustes rápidos:

1. **Configurar Vite**: Abre `vite.config.js` y cambia el valor de `base` por el nombre exacto de tu nuevo repositorio en GitHub:
   ```javascript
   base: '/nombre-de-tu-nuevo-repo/'
   ```
2. **Iniciar Git**: Abre la terminal en esta carpeta y ejecuta:
   ```bash
   git init
   git remote add origin https://github.com
   ```
3. **Activar GitHub Actions**: Tras subir tu primer commit a GitHub, ve a la pestaña **Settings ➔ Pages** en la web de tu repositorio y en *Source* selecciona **GitHub Actions**.

---

## 📂 Estructura de Estilos (Sass Modular)
Este proyecto utiliza una arquitectura modular limpia para organizar los estilos en `src/sass/`:
* `abstracts/`: Variables y mixins.
* `base/`: Reset y tipografía global.
* `layout/`: Estructura general de las páginas (header, hero, footer).
* `components/`: Elementos reutilizables (buttons, cards).

*Nota: Todos los módulos se importan en `src/sass/main.scss`, el cual está conectado en el archivo `main.js`.*

## 🛠️ Comandos Útiles

* `npm install` - Instala las dependencias la primera vez.
* `npm run dev` - Arranca el servidor de desarrollo local.
* `npm run build` - Compila el proyecto localmente (opcional, ya que GitHub Actions lo hace solo al hacer push).
