# 🚀 Guía Rápida de Inicio

Esta es una guía paso a paso para poner tu portfolio en línea en **menos de 30 minutos**.

---

## ✅ Checklist Previo

Antes de empezar, asegúrate de tener:

- [ ] Cuenta de GitHub (crea una gratis en https://github.com/)
- [ ] Git instalado en tu computadora
- [ ] Tu foto profesional (500x500px)
- [ ] Tu CV en PDF
- [ ] Logos de empresas (Accenture, UPS, Platzi)

---

## 📝 Paso 1: Personalizar Contenido (10 minutos)

### 1.1 Información Personal

Abre `index.html` y busca estos textos para reemplazar:

```html
<!-- Línea ~107 - Tu nombre -->
<span class="gradient-text">Yeison Moreno Rivera</span>

<!-- Línea ~650 - Tu email -->
<a href="mailto:jeisoncgy@gmail.com">

<!-- Línea ~660 - Tu WhatsApp -->
<a href="https://wa.me/573052282010">

<!-- Línea ~670 - Tu LinkedIn -->
<a href="https://linkedin.com/in/tu-perfil">
```

**Usa Ctrl+F (Find) para buscar estos textos rápidamente.**

### 1.2 Redes Sociales

Actualiza todos los links:
- LinkedIn: Busca `linkedin.com/in/tu-perfil` y reemplaza
- GitHub: Busca `github.com/tu-usuario` y reemplaza
- Email: Busca `jeisoncgy@gmail.com` y reemplaza
- WhatsApp: Busca `573052282010` y reemplaza por tu número

---

## 🖼️ Paso 2: Agregar Imágenes (5 minutos)

### 2.1 Foto de Perfil

Coloca tu foto en:
```
assets/images/profile.jpg
```

**Requisitos:**
- Tamaño: 500x500px
- Formato: JPG
- Peso: Menos de 200KB

**Optimizar imagen online:**
https://tinypng.com/

### 2.2 Logos de Empresas

Descarga y coloca en `assets/images/logos/`:

**Accenture:**
```
Opción 1: https://logo.clearbit.com/accenture.com
Opción 2: Google → "accenture logo png transparent"
```

**UPS:**
```
Opción 1: https://logo.clearbit.com/ups.com
Opción 2: Google → "ups logo png transparent"
```

**Platzi:**
```
URL directa: https://static.platzi.com/media/platzi-isotipo.png
```

### 2.3 CV en PDF

Coloca tu CV en:
```
assets/cv/Yeison_Moreno_CV.pdf
```

---

## 🎨 Paso 3: Personalizar Colores (Opcional - 3 minutos)

Si quieres cambiar los colores, abre `css/style.css` y modifica estas líneas (línea ~10):

```css
:root {
    --accent-primary: #00D9FF;      /* Cambia este color */
    --accent-secondary: #0099FF;    /* Cambia este color */
}
```

**Herramienta para elegir colores:**
https://coolors.co/

---

## 🌐 Paso 4: Subir a GitHub (7 minutos)

### 4.1 Crear Repositorio

1. Ve a https://github.com/new
2. Nombre del repositorio: `portfolio`
3. Selecciona **Public**
4. **NO** marques "Add a README file"
5. Click en **Create repository**

### 4.2 Subir Archivos

**Opción A: Desde la Terminal (Recomendado)**

```bash
# Abre la terminal en la carpeta portfolio

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Crea el commit
git commit -m "Initial commit: Mi portfolio profesional"

# Conecta con GitHub (reemplaza 'tuusuario' con tu usuario de GitHub)
git remote add origin https://github.com/tuusuario/portfolio.git

# Sube los archivos
git branch -M main
git push -u origin main
```

**Opción B: Desde la Web (Más fácil)**

1. Ve a tu repositorio en GitHub
2. Click en **Add file** → **Upload files**
3. Arrastra todos los archivos de tu carpeta portfolio
4. Click en **Commit changes**

---

## 🚀 Paso 5: Activar GitHub Pages (2 minutos)

1. En tu repositorio, click en **Settings**
2. En el menú lateral, busca **Pages**
3. En **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click en **Save**
5. Espera 2-3 minutos

**¡Listo!** Tu portfolio estará en:
```
https://tuusuario.github.io/portfolio
```

---

## ✅ Paso 6: Verificar que Todo Funcione (3 minutos)

Abre tu URL y verifica:

- [ ] La página carga correctamente
- [ ] Tu foto aparece
- [ ] Los logos de empresas aparecen
- [ ] El botón "Descargar CV" funciona
- [ ] Los links de redes sociales funcionan
- [ ] El formulario de contacto muestra el mensaje de éxito
- [ ] El menú móvil funciona (prueba en móvil)

---

## 🐛 Solución Rápida de Problemas

### ❌ GitHub Pages muestra 404
**Solución:** Espera 5 minutos más. GitHub Pages tarda un poco.

### ❌ Las imágenes no cargan
**Solución:** Verifica que estén en la carpeta correcta y que los nombres sean exactos.

### ❌ El CV no descarga
**Solución:** Verifica que el archivo se llame exactamente `Yeison_Moreno_CV.pdf`

### ❌ Los colores se ven raros
**Solución:** Limpia el caché del navegador (Ctrl + Shift + R)

---

## 📱 Paso 7: Compartir tu Portfolio

Una vez que esté funcionando:

### LinkedIn
```
¡Emocionado de compartir mi nuevo portfolio profesional! 🚀

Después de meses de trabajo, finalmente está en línea.
Incluye mis proyectos más destacados y experiencia en [tu especialidad].

¿Qué les parece? Feedback bienvenido 👇

🔗 [tu-url.github.io/portfolio]

#Portfolio #WebDevelopment #DataAnalytics #FinancialAnalyst
```

### Twitter/X
```
🚀 Acabo de lanzar mi portfolio profesional!

Construido con HTML, CSS y JavaScript vanilla.
100% responsive y optimizado.

Check it out: [tu-url]

#WebDev #Portfolio
```

### Email (Para Recruiters)
```
Asunto: Portfolio Profesional - [Tu Nombre]

Hola [Nombre del Recruiter],

Me complace compartir mi portfolio profesional actualizado:
[tu-url.github.io/portfolio]

Incluye detalles de mi experiencia en [tu área], proyectos destacados
y certificaciones recientes.

Quedo atento a cualquier oportunidad de colaboración.

Saludos,
[Tu Nombre]
```

---

## 🎯 Próximos Pasos (Opcional)

Una vez que tu portfolio esté en línea:

1. **Agrega Google Analytics** para ver cuántas visitas recibes
2. **Compra un dominio personalizado** (ej: yeison-moreno.com) - $10-15/año
3. **Agrega un blog** para escribir sobre tu experiencia
4. **Conecta el formulario** a un backend real
5. **Mejora el SEO** para aparecer en búsquedas de Google

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Lee el README.md completo (más detallado)
2. Busca el error en Google
3. Revisa la consola del navegador (F12)
4. Contacta al soporte de GitHub Pages

---

## 🎉 ¡Felicidades!

Si llegaste hasta aquí, ya tienes tu portfolio profesional en línea.

**Ahora compártelo con el mundo y consigue ese trabajo soñado. 🚀**

---

**Última actualización:** Enero 2025
