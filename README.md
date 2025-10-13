# 💼 Portfolio Profesional - Yeison Moreno Rivera

Portfolio web profesional de nivel senior diseñado para impresionar a recruiters de empresas tech, fintech y consultoras.

![Portfolio Preview](assets/images/preview.png)

## 🚀 Demo en Vivo

**URL:** [https://tuusuario.github.io/portfolio](https://tuusuario.github.io/portfolio)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Personalización](#-personalización)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Optimización y SEO](#-optimización-y-seo)
- [Solución de Problemas](#-solución-de-problemas)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)

---

## ✨ Características

### Diseño
- ✅ **Glassmorphism Design** - Diseño moderno con efectos de vidrio
- ✅ **Dark Mode by Default** - Modo oscuro profesional con toggle opcional
- ✅ **Fully Responsive** - Adaptado para móvil, tablet y desktop
- ✅ **Smooth Animations** - Animaciones sutiles y profesionales
- ✅ **Particle Effects** - Fondo animado con partículas

### Funcionalidades
- ✅ **Typing Effect** - Efecto de escritura en hero section
- ✅ **Scroll Animations** - Elementos que aparecen al hacer scroll
- ✅ **Counter Animation** - Números animados en estadísticas
- ✅ **Progress Bars** - Barras de progreso animadas para skills
- ✅ **Smooth Scroll** - Navegación suave entre secciones
- ✅ **Scroll to Top** - Botón para volver arriba
- ✅ **Contact Form** - Formulario de contacto con validación
- ✅ **Mobile Menu** - Menú hamburguesa para móviles

### Performance
- ✅ **No External Dependencies** - Solo HTML, CSS y JavaScript vanilla
- ✅ **Optimized Loading** - Preloader y lazy loading de imágenes
- ✅ **SEO Ready** - Meta tags optimizados
- ✅ **Accessibility** - Navegación por teclado y ARIA labels

---

## 🛠 Tecnologías

Este portfolio está construido con:

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript (Vanilla)** - Sin frameworks pesados
- **Google Fonts** - Tipografía Inter y Space Grotesk
- **Font Awesome** - Iconos profesionales
- **Devicons** - Iconos de tecnologías

**No se requiere instalación de dependencias** - Todo funciona directamente al abrir `index.html`

---

## 📁 Estructura del Proyecto

```
portfolio/
│
├── index.html                 # Página principal
│
├── css/
│   ├── style.css             # Estilos principales
│   └── animations.css        # Animaciones
│
├── js/
│   ├── main.js               # JavaScript principal
│   └── animations.js         # JavaScript de animaciones
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg       # Tu foto profesional
│   │   ├── hero-bg.jpg       # Fondo hero (opcional)
│   │   └── logos/            # Logos de empresas
│   │       ├── accenture.png
│   │       ├── ups.png
│   │       └── platzi.png
│   │
│   ├── cv/
│   │   └── Yeison_Moreno_CV.pdf  # Tu CV en PDF
│   │
│   └── icons/
│       └── favicon.png       # Favicon del sitio
│
├── .gitignore                # Archivos a ignorar en Git
└── README.md                 # Este archivo
```

---

## 🚀 Instalación

### Método 1: Clonar el Repositorio

```bash
# Clona este repositorio
git clone https://github.com/tuusuario/portfolio.git

# Entra al directorio
cd portfolio

# Abre index.html en tu navegador
# O usa Live Server en VS Code
```

### Método 2: Descargar ZIP

1. Click en el botón verde "Code"
2. Selecciona "Download ZIP"
3. Descomprime el archivo
4. Abre `index.html` en tu navegador

### Método 3: Usar Live Server (Recomendado para desarrollo)

```bash
# Si tienes VS Code instalado:
1. Instala la extensión "Live Server"
2. Click derecho en index.html
3. Selecciona "Open with Live Server"
```

---

## 🎨 Personalización

### 1. Información Personal

Abre `index.html` y busca las siguientes secciones para actualizar tu información:

#### Hero Section (Línea ~100)
```html
<h1 class="hero-title">
    Hola, soy <span class="gradient-text">TU NOMBRE</span>
</h1>
```

#### About Section (Línea ~200)
- Actualiza la descripción de tu experiencia
- Modifica los números de las estadísticas

#### Experience Section (Línea ~300)
- Actualiza las fechas y descripciones de tus trabajos
- Modifica los tech badges con tus tecnologías

#### Contact Section (Línea ~700)
- Actualiza tu email: `jeisoncgy@gmail.com`
- Actualiza tu teléfono: `+57 305 228 2010`
- Actualiza tus links de LinkedIn, GitHub, etc.

### 2. Colores y Estilos

Abre `css/style.css` y modifica las variables CSS (línea ~10):

```css
:root {
    /* Cambia estos valores para personalizar colores */
    --accent-primary: #00D9FF;      /* Color principal */
    --accent-secondary: #0099FF;    /* Color secundario */
    --bg-primary: #0a0a0a;          /* Fondo principal */

    /* Cambia las fuentes */
    --font-primary: 'Inter', sans-serif;
    --font-display: 'Space Grotesk', sans-serif;
}
```

### 3. Imágenes

Coloca tus imágenes en las siguientes ubicaciones:

```
assets/images/profile.jpg           # Tu foto (500x500px)
assets/images/logos/accenture.png   # Logo Accenture (200x200px)
assets/images/logos/ups.png         # Logo UPS (200x200px)
assets/images/logos/platzi.png      # Logo Platzi (200x200px)
assets/cv/Yeison_Moreno_CV.pdf     # Tu CV en PDF
assets/icons/favicon.png            # Favicon (32x32px)
```

**Dónde conseguir los logos:**
- Accenture: https://www.accenture.com/us-en/about/company/media-resources
- UPS: https://www.ups.com/us/en/about/news/brand.page
- Platzi: https://static.platzi.com/media/platzi-isotipo.png

**O usa placeholders temporales:**
```html
<!-- En index.html, puedes usar URLs temporales: -->
<img src="https://logo.clearbit.com/accenture.com" alt="Accenture">
<img src="https://logo.clearbit.com/ups.com" alt="UPS">
```

### 4. Typing Effect

Para cambiar los textos que aparecen en el efecto typing, abre `js/main.js` (línea ~120):

```javascript
const texts = [
    'Tu Texto 1',
    'Tu Texto 2',
    'Tu Texto 3'
];
```

### 5. Formulario de Contacto

El formulario actualmente solo funciona en frontend. Para conectarlo a un backend:

**Opción 1: Formspree (Gratis)**
```html
<!-- En index.html, cambia el form action: -->
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

**Opción 2: Netlify Forms (Gratis)**
```html
<!-- Agrega estos atributos: -->
<form name="contact" method="POST" data-netlify="true">
```

**Opción 3: EmailJS (Gratis)**
- Crea cuenta en https://www.emailjs.com/
- Sigue su documentación para integrar

---

## 🌐 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

```bash
# En tu terminal, dentro de la carpeta portfolio:

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz tu primer commit
git commit -m "Initial commit: Portfolio profesional"

# Crea un nuevo repositorio en GitHub.com (sin README)
# Luego conecta tu repositorio local:

git remote add origin https://github.com/tuusuario/portfolio.git

# Sube los archivos
git branch -M main
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub.com
2. Click en **Settings**
3. Scroll hasta **Pages** (menú lateral)
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/root`
5. Click en **Save**
6. Espera 2-3 minutos
7. Tu portfolio estará en: `https://tuusuario.github.io/portfolio`

### Paso 3: Actualizar el Portfolio

```bash
# Cada vez que hagas cambios:

git add .
git commit -m "Descripción de los cambios"
git push

# Los cambios se verán en 1-2 minutos en tu URL
```

### Dominio Personalizado (Opcional)

Para usar tu propio dominio (ej: `yeison-moreno.com`):

1. Compra un dominio en Namecheap, GoDaddy, etc.
2. En GitHub Pages settings, agrega tu dominio en **Custom domain**
3. En tu proveedor de dominio, agrega estos DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   tuusuario.github.io
   ```
4. Espera 24-48 horas para propagación DNS

---

## 🎯 Optimización y SEO

### Meta Tags

Actualiza los meta tags en `index.html` (línea ~5):

```html
<meta name="description" content="Tu descripción aquí">
<meta property="og:title" content="Tu nombre - Portfolio">
<meta property="og:url" content="https://tu-url.com">
```

### Performance Tips

1. **Optimiza imágenes:**
   - Usa TinyPNG: https://tinypng.com/
   - Mantén imágenes bajo 200KB
   - Usa WebP si es posible

2. **Minifica archivos para producción:**
   ```bash
   # Opcional: usa herramientas online
   # CSS Minifier: https://cssminifier.com/
   # JS Minifier: https://javascript-minifier.com/
   ```

3. **Lighthouse Score:**
   - Abre Chrome DevTools (F12)
   - Ve a "Lighthouse" tab
   - Run audit
   - Objetivo: 90+ en todas las categorías

### Analytics (Opcional)

Para trackear visitas, agrega Google Analytics:

1. Crea cuenta en https://analytics.google.com/
2. Obtén tu Measurement ID (ej: G-XXXXXXXXXX)
3. Agrega antes del `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Solución de Problemas

### El portfolio no se ve bien en móvil
- Asegúrate de tener esta línea en el `<head>`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### Las animaciones no funcionan
- Abre la consola del navegador (F12)
- Verifica que no haya errores en JavaScript
- Asegúrate de que ambos archivos JS estén cargando correctamente

### Las imágenes no cargan
- Verifica que los paths sean correctos
- Las rutas deben ser relativas: `assets/images/profile.jpg`
- No uses rutas absolutas como `C:/Users/...`

### El formulario no envía emails
- El formulario actualmente es solo frontend
- Sigue las instrucciones en [Personalización > Formulario de Contacto](#5-formulario-de-contacto)

### GitHub Pages muestra 404
- Asegúrate de que el archivo se llame `index.html` (lowercase)
- Verifica que esté en la raíz del repositorio
- Espera 2-3 minutos después de activar Pages

---

## 🗺 Roadmap

Futuras mejoras planeadas:

- [ ] Sección de Blog
- [ ] Modo oscuro/claro avanzado
- [ ] Versión en inglés
- [ ] Integración con backend para formulario
- [ ] Sistema de comentarios
- [ ] Más animaciones interactivas
- [ ] PWA (Progressive Web App)
- [ ] Tests automatizados

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portfolio personal.

### MIT License

```
Copyright (c) 2025 Yeison Moreno Rivera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💬 Contacto

**Yeison Moreno Rivera**

- 📧 Email: jeisoncgy@gmail.com
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](#)
- 📱 WhatsApp: +57 305 228 2010
- 🌐 Portfolio: [tuusuario.github.io/portfolio](#)

---

## 🙏 Agradecimientos

- Diseño inspirado en portfolios modernos de la industria tech
- Iconos: [Font Awesome](https://fontawesome.com/)
- Fuentes: [Google Fonts](https://fonts.google.com/)
- Hosting: [GitHub Pages](https://pages.github.com/)

---

## ⭐ ¿Te gustó este portfolio?

Si este proyecto te sirvió, considera:

1. Darle una ⭐ en GitHub
2. Compartirlo con otros
3. Mencionarme en redes sociales
4. Contratarme para tu próximo proyecto 😉

---

**Construido con ❤️ en Medellín, Colombia**

**Última actualización:** Enero 2025
