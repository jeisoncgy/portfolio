# 🎨 Guía de Personalización Avanzada

Esta guía te ayudará a personalizar tu portfolio más allá de lo básico.

---

## 🎨 Cambiar Esquema de Colores

### Paso 1: Elige tu Paleta de Colores

**Herramientas Recomendadas:**
- https://coolors.co/ - Generador de paletas
- https://color.adobe.com/ - Adobe Color
- https://mycolor.space/ - Gradientes automáticos

### Paso 2: Actualiza las Variables CSS

Abre `css/style.css` y busca la sección `:root` (línea ~10):

```css
:root {
    /* Colores Principales */
    --accent-primary: #00D9FF;      /* Color de acento principal */
    --accent-secondary: #0099FF;    /* Color de acento secundario */

    /* Fondos */
    --bg-primary: #0a0a0a;          /* Fondo principal */
    --bg-secondary: #111111;        /* Fondo secundario */
    --bg-tertiary: #1a1a1a;         /* Fondo terciario */

    /* Textos */
    --text-primary: #ffffff;        /* Texto principal */
    --text-secondary: #b4b4b4;      /* Texto secundario */
    --text-tertiary: #808080;       /* Texto terciario */
}
```

### Ejemplos de Paletas Profesionales

#### 1. Tech Blue (Actual)
```css
--accent-primary: #00D9FF;
--accent-secondary: #0099FF;
```

#### 2. Corporate Purple
```css
--accent-primary: #A855F7;
--accent-secondary: #7C3AED;
```

#### 3. Elegant Gold
```css
--accent-primary: #F59E0B;
--accent-secondary: #D97706;
```

#### 4. Nature Green
```css
--accent-primary: #10B981;
--accent-secondary: #059669;
```

#### 5. Passionate Red
```css
--accent-primary: #EF4444;
--accent-secondary: #DC2626;
```

---

## 🔤 Cambiar Tipografías

### Paso 1: Elegir Fuentes

**Recursos:**
- https://fonts.google.com/
- https://fonts.adobe.com/

**Combinaciones Recomendadas:**

#### Opción 1: Moderna y Limpia (Actual)
```
Display: Space Grotesk
Body: Inter
```

#### Opción 2: Profesional y Clásica
```
Display: Playfair Display
Body: Source Sans Pro
```

#### Opción 3: Tech y Futurista
```
Display: Montserrat
Body: Roboto
```

#### Opción 4: Elegante y Minimalista
```
Display: Poppins
Body: Open Sans
```

### Paso 2: Actualizar en HTML

Abre `index.html` y busca el `<link>` de Google Fonts (línea ~25):

```html
<!-- Reemplaza esta línea: -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Por tu combinación elegida, ejemplo: -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

### Paso 3: Actualizar en CSS

Abre `css/style.css` y actualiza las variables (línea ~30):

```css
:root {
    --font-primary: 'Open Sans', sans-serif;
    --font-display: 'Poppins', sans-serif;
}
```

---

## ✏️ Personalizar Textos del Hero

### Typing Effect

Abre `js/main.js` y busca el array `texts` (línea ~120):

```javascript
const texts = [
    'Senior Financial Analyst',      // Texto 1
    'Data Analytics Specialist',     // Texto 2
    'Credit & OTC Expert',          // Texto 3
    'Automation Engineer',          // Texto 4
    'Python & SQL Developer',       // Texto 5
    'Power BI Expert'               // Texto 6
];
```

**Ideas de Textos:**
```javascript
// Para Financial Analyst:
'Financial Strategy Expert'
'Data-Driven Decision Maker'
'Business Intelligence Specialist'
'Credit Risk Analyst'

// Para Developer:
'Full Stack Developer'
'Frontend Engineer'
'Backend Specialist'
'API Architect'

// Para Designer:
'UI/UX Designer'
'Product Designer'
'Visual Designer'
'Brand Strategist'
```

---

## 🎭 Cambiar Animaciones

### Desactivar Animaciones

Si prefieres un estilo más sobrio, puedes desactivar algunas animaciones.

Abre `css/animations.css` y comenta las animaciones que no quieras:

```css
/* Comentar así para desactivar: */
/*
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
*/
```

### Cambiar Velocidad de Animaciones

Abre `css/style.css` y modifica las variables (línea ~40):

```css
:root {
    /* Más lento = más suave */
    --transition-fast: 0.3s ease;     /* Era 0.2s */
    --transition-normal: 0.5s ease;   /* Era 0.3s */
    --transition-slow: 0.8s ease;     /* Era 0.5s */
}
```

---

## 🎯 Agregar Nuevas Secciones

### Ejemplo: Sección de Blog

#### Paso 1: Agregar HTML

Abre `index.html` y agrega antes de la sección de contacto:

```html
<!-- Blog Section -->
<section id="blog" class="blog section">
    <div class="container">
        <h2 class="section-title">
            <span class="title-number">07.</span>
            Blog
            <span class="title-line"></span>
        </h2>

        <div class="blog-grid">
            <!-- Blog Post 1 -->
            <article class="blog-card card">
                <div class="blog-image">
                    <img src="assets/images/blog/post-1.jpg" alt="Blog post">
                </div>
                <div class="blog-content">
                    <span class="blog-category">Data Analytics</span>
                    <h3 class="blog-title">Cómo automatizar reportes con Python</h3>
                    <p class="blog-excerpt">
                        En este artículo te muestro cómo automaticé 10+ reportes usando Python y Power BI...
                    </p>
                    <div class="blog-meta">
                        <span class="blog-date">15 Enero 2025</span>
                        <a href="#" class="blog-link">Leer más →</a>
                    </div>
                </div>
            </article>

            <!-- Agrega más posts aquí -->
        </div>
    </div>
</section>
```

#### Paso 2: Agregar CSS

Abre `css/style.css` y agrega al final:

```css
/* Blog Section */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    overflow: hidden;
    cursor: pointer;
}

.blog-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
    transform: scale(1.1);
}

.blog-content {
    padding: 1.5rem;
}

.blog-category {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--accent-gradient);
    color: var(--bg-primary);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.blog-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}

.blog-excerpt {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.blog-date {
    font-size: 0.875rem;
    color: var(--text-tertiary);
}

.blog-link {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 0.875rem;
    transition: var(--transition-fast);
}

.blog-link:hover {
    transform: translateX(5px);
}
```

#### Paso 3: Actualizar Navegación

Agrega el link en el navbar:

```html
<li class="nav-item">
    <a href="#blog" class="nav-link">Blog</a>
</li>
```

---

## 🎨 Personalizar Cards

### Estilo 1: Cards con Borde Brillante

Abre `css/style.css` y modifica la clase `.card`:

```css
.card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 2px solid transparent;
    background-image:
        linear-gradient(var(--glass-bg), var(--glass-bg)),
        var(--accent-gradient);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: var(--transition-normal);
}
```

### Estilo 2: Cards con Sombra Neón

```css
.card:hover {
    transform: translateY(-5px);
    box-shadow:
        0 0 20px rgba(0, 217, 255, 0.3),
        0 0 40px rgba(0, 217, 255, 0.2),
        0 0 60px rgba(0, 217, 255, 0.1);
}
```

---

## 🌟 Agregar Efectos Especiales

### Cursor Personalizado

Agrega al final de `css/style.css`:

```css
/* Cursor Personalizado */
body {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="10" fill="%2300D9FF"/></svg>') 16 16, auto;
}

a, button {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="10" fill="%23FF0064"/></svg>') 16 16, pointer;
}
```

### Partículas Personalizadas

Abre `js/main.js` y busca la función `createParticle` (línea ~400):

```javascript
// Cambiar cantidad de partículas:
for (let i = 0; i < 100; i++) {  // Era 50, ahora 100
    createParticle();
}

// Cambiar colores de partículas:
particle.style.background = '#00D9FF';  // Tu color aquí
```

---

## 📱 Optimizar para Móvil

### Ajustar Tamaños de Fuente

Abre `css/style.css` y modifica los `clamp()` values:

```css
h1 {
    font-size: clamp(2rem, 5vw, 4rem);  /* min, escalado, max */
}
```

### Espaciado en Móvil

Agrega al final de `css/style.css`:

```css
@media (max-width: 768px) {
    .section {
        padding: 3rem 0;  /* Menos padding en móvil */
    }

    .container {
        padding: 0 1rem;  /* Menos padding lateral */
    }
}
```

---

## 🎯 SEO Avanzado

### Meta Tags Adicionales

Agrega en `index.html` dentro del `<head>`:

```html
<!-- JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yeison Moreno Rivera",
  "jobTitle": "Senior Financial Analyst",
  "url": "https://tuusuario.github.io/portfolio",
  "sameAs": [
    "https://linkedin.com/in/tu-perfil",
    "https://github.com/tu-usuario"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Medellín",
    "addressCountry": "Colombia"
  }
}
</script>

<!-- Canonical URL -->
<link rel="canonical" href="https://tuusuario.github.io/portfolio">

<!-- Robots -->
<meta name="robots" content="index, follow">
```

---

## 🎨 Dark Mode Avanzado

### Toggle Animado

Abre `css/style.css` y mejora el theme toggle:

```css
.theme-toggle {
    position: relative;
    width: 60px;
    height: 30px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 15px;
    cursor: pointer;
    transition: var(--transition-normal);
}

.theme-toggle::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: var(--accent-primary);
    border-radius: 50%;
    transition: transform 0.3s ease;
}

[data-theme="light"] .theme-toggle::before {
    transform: translateX(30px);
}
```

---

## 💡 Tips Adicionales

### 1. Performance

```javascript
// Agrega lazy loading a imágenes en HTML:
<img src="image.jpg" loading="lazy" alt="Description">
```

### 2. Accesibilidad

```html
<!-- Siempre usa alt en imágenes: -->
<img src="profile.jpg" alt="Yeison Moreno - Senior Financial Analyst">

<!-- Agrega aria-labels: -->
<button aria-label="Abrir menú de navegación">
```

### 3. Testing

Prueba tu portfolio en:
- Chrome DevTools (Responsive mode)
- https://www.browserstack.com/ (múltiples dispositivos)
- https://gtmetrix.com/ (performance)
- https://wave.webaim.org/ (accesibilidad)

---

## 🎉 ¡Experimenta!

No tengas miedo de experimentar con el código. Siempre puedes:

1. Hacer backup antes de cambios grandes
2. Usar Git para volver atrás
3. Probar en local antes de subir a GitHub

---

**¿Tienes más ideas? ¡Compártelas!**

Última actualización: Enero 2025
