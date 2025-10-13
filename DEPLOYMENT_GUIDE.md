# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te llevará paso a paso para publicar tu portafolio profesional en GitHub Pages y obtener una URL permanente para tu perfil de LinkedIn.

## 📋 Requisitos Previos

1. **Cuenta de GitHub**: Si no tienes una, créala en [github.com](https://github.com)
2. **Git instalado**: Descarga desde [git-scm.com](https://git-scm.com/)
3. **Tu portafolio listo**: Ya lo tienes ✅

---

## 🎯 Paso 1: Crear Repositorio en GitHub

1. **Ve a GitHub** y haz clic en el botón verde **"New"** o **"+"** → **"New repository"**

2. **Configura el repositorio**:
   - **Repository name**: `portfolio` (o el nombre que prefieras)
   - **Description**: "Professional Portfolio - Senior Financial Analyst"
   - **Visibility**: ✅ **Public** (obligatorio para GitHub Pages gratis)
   - **NO marques** "Initialize this repository with a README"
   - Haz clic en **"Create repository"**

3. **Copia la URL del repositorio** que aparece (será algo como):
   ```
   https://github.com/TU-USUARIO/portfolio.git
   ```

---

## 💻 Paso 2: Configurar Git en Tu Computadora

Abre **Git Bash** (o tu terminal) y ejecuta estos comandos **UNA SOLA VEZ**:

```bash
# Configura tu nombre (usa tu nombre real)
git config --global user.name "Yeison Moreno Rivera"

# Configura tu email (usa el email de tu cuenta GitHub)
git config --global user.email "tu-email@example.com"
```

---

## 📦 Paso 3: Subir Tu Portafolio a GitHub

Navega a la carpeta de tu portafolio y ejecuta estos comandos:

```bash
# 1. Ve a la carpeta del portafolio
cd "c:\Users\jeiso\OneDrive\Documentos\Yeison Moreno Projects\portfolio"

# 2. Inicializa Git (crea el repositorio local)
git init

# 3. Agrega todos los archivos
git add .

# 4. Crea el primer commit
git commit -m "Initial commit: Professional portfolio deployment"

# 5. Conecta con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/portfolio.git

# 6. Cambia a la rama main
git branch -M main

# 7. Sube todo a GitHub
git push -u origin main
```

**⚠️ IMPORTANTE**: En el paso 5, reemplaza `TU-USUARIO` con tu nombre de usuario real de GitHub.

---

## 🌐 Paso 4: Activar GitHub Pages

1. **Ve a tu repositorio** en GitHub: `https://github.com/TU-USUARIO/portfolio`

2. **Haz clic en "Settings"** (Configuración) en la parte superior

3. **En el menú izquierdo, busca "Pages"** (está en la sección "Code and automation")

4. **En "Source" (Fuente)**:
   - Selecciona: **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
   - Haz clic en **"Save"**

5. **¡Espera 2-3 minutos!** GitHub está construyendo tu sitio

6. **Refresca la página** y verás un mensaje verde:
   ```
   ✅ Your site is live at https://TU-USUARIO.github.io/portfolio/
   ```

---

## 🔗 Paso 5: Obtener Tu URL Permanente

Tu portafolio estará disponible en:

```
https://TU-USUARIO.github.io/portfolio/
```

**Ejemplo**: Si tu usuario es `yeisonmoreno`, la URL será:
```
https://yeisonmoreno.github.io/portfolio/
```

### 📝 Para LinkedIn:

1. Ve a tu perfil de LinkedIn
2. Haz clic en **"Editar perfil"**
3. En la sección **"Información de contacto"** → **"Sitio web"**
4. Pega tu URL: `https://TU-USUARIO.github.io/portfolio/`
5. Guarda los cambios

---

## 🔄 Cómo Actualizar Tu Portafolio

Cada vez que hagas cambios, ejecuta:

```bash
# 1. Ve a la carpeta del portafolio
cd "c:\Users\jeiso\OneDrive\Documentos\Yeison Moreno Projects\portfolio"

# 2. Agrega los cambios
git add .

# 3. Crea un commit con descripción
git commit -m "Descripción de tus cambios"

# 4. Sube a GitHub
git push
```

**Los cambios aparecerán en tu sitio en 1-2 minutos.**

---

## 🎨 (Opcional) Usar Dominio Personalizado

Si quieres usar un dominio como `yeisonmoreno.com`:

1. **Compra un dominio** en Namecheap, GoDaddy, etc.

2. **En tu proveedor de dominio**, agrega estos registros DNS:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153

   Type: A
   Host: @
   Value: 185.199.109.153

   Type: A
   Host: @
   Value: 185.199.110.153

   Type: A
   Host: @
   Value: 185.199.111.153

   Type: CNAME
   Host: www
   Value: TU-USUARIO.github.io
   ```

3. **En GitHub Pages Settings**:
   - Custom domain: `tudominio.com`
   - ✅ Enforce HTTPS

4. **Espera 24-48 horas** para propagación DNS

---

## 🆘 Solución de Problemas

### ❌ "Git no se reconoce como comando"
**Solución**: Instala Git desde [git-scm.com](https://git-scm.com/) y reinicia tu terminal.

### ❌ "Permission denied" al hacer push
**Solución**:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un token con permisos "repo"
3. Usa el token como contraseña al hacer push

### ❌ "El sitio muestra 404"
**Soluciones**:
1. Verifica que `index.html` esté en la raíz del repositorio
2. Espera 5 minutos adicionales
3. Verifica que el repositorio sea público
4. En GitHub Pages settings, cambia a "main" branch y guarda nuevamente

### ❌ "Las imágenes no se ven"
**Solución**: Verifica que las rutas sean relativas:
- ✅ Correcto: `assets/images/profile.jpg`
- ❌ Incorrecto: `/assets/images/profile.jpg` o `C:\Users\...`

---

## 📊 Verificar Estado del Despliegue

Para ver el estado de tu deployment:

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Actions"** (si está habilitado)
3. O ve a **Settings → Pages** para ver el último deployment

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Git configurado con nombre y email
- [ ] Código subido a GitHub (`git push`)
- [ ] GitHub Pages activado en Settings
- [ ] URL verificada: `https://TU-USUARIO.github.io/portfolio/`
- [ ] URL agregada a LinkedIn
- [ ] Sitio probado en móvil y desktop
- [ ] Todas las secciones funcionan correctamente
- [ ] Imágenes y CV se cargan correctamente

---

## 🎯 Resumen de Comandos Rápidos

```bash
# Primera vez (setup inicial)
cd "c:\Users\jeiso\OneDrive\Documentos\Yeison Moreno Projects\portfolio"
git init
git add .
git commit -m "Initial commit: Professional portfolio"
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git branch -M main
git push -u origin main

# Actualizaciones futuras
git add .
git commit -m "Descripción del cambio"
git push
```

---

## 🚀 ¡Tu Portafolio Ya Está en Línea!

Tu URL permanente será:
```
https://TU-USUARIO.github.io/portfolio/
```

**Compártela en**:
- ✅ LinkedIn (sección de sitios web)
- ✅ Tu CV
- ✅ Correos de presentación
- ✅ Tarjetas de presentación
- ✅ Firma de email

---

## 💡 Tips Profesionales

1. **Actualiza regularmente**: Agrega nuevos proyectos y certificaciones
2. **Monitorea analytics**: Usa Google Analytics (gratis) para ver visitas
3. **SEO**: Tu portafolio ya tiene meta tags optimizados
4. **Comparte**: Incluye la URL en TODAS tus aplicaciones laborales
5. **Backup**: GitHub ya es tu backup automático

---

**¿Necesitas ayuda?** Revisa la documentación oficial:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)

**¡Éxito en tu búsqueda laboral! 🎉**
