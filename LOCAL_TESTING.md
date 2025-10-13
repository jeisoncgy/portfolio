# 🧪 Guía de Testing Local

Esta guía te muestra cómo probar tu portfolio localmente antes de subirlo a GitHub Pages.

---

## 🚀 **Métodos para Ver tu Portfolio Localmente**

### **Método 1: Abrir Directamente (Más Fácil)**

Simplemente haz doble click en `index.html` o:

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

**Pros:**
- ✅ Súper rápido
- ✅ No requiere instalar nada

**Contras:**
- ⚠️ Algunas funciones pueden no funcionar (CORS)
- ⚠️ URL será `file:///` en lugar de `http://`

---

### **Método 2: Python HTTP Server (Recomendado)**

Si tienes Python instalado:

```bash
# Navega a la carpeta
cd "c:\Users\jeiso\OneDrive\Documentos\Yeison Moreno Projects\portfolio"

# Python 3
python -m http.server 8000

# O Python 2 (si tienes versión antigua)
python -m SimpleHTTPServer 8000
```

Luego abre en tu navegador:
```
http://localhost:8000
```

**Para detener el servidor:** Presiona `Ctrl + C` en la terminal

**Pros:**
- ✅ Simula un servidor real
- ✅ No hay problemas de CORS
- ✅ URLs limpias

**Contras:**
- ⚠️ Requiere tener Python instalado

---

### **Método 3: Live Server (VS Code)**

Si usas Visual Studio Code:

1. Instala la extensión "Live Server" por Ritwick Dey
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

**URL automática:**
```
http://127.0.0.1:5500
```

**Pros:**
- ✅ Auto-refresh al guardar cambios
- ✅ Muy conveniente para desarrollo
- ✅ Puerto aleatorio si el 5500 está ocupado

**Contras:**
- ⚠️ Solo funciona en VS Code

---

### **Método 4: Node.js HTTP Server**

Si tienes Node.js instalado:

```bash
# Instalar http-server globalmente (solo una vez)
npm install -g http-server

# Navegar a la carpeta
cd "c:\Users\jeiso\OneDrive\Documentos\Yeison Moreno Projects\portfolio"

# Iniciar servidor
http-server -p 8000
```

Abre en tu navegador:
```
http://localhost:8000
```

---

## 🧪 **Checklist de Testing**

Cuando pruebes localmente, verifica:

### **Funcionalidad General**
- [ ] La página carga sin errores
- [ ] No hay errores en la consola (F12 → Console)
- [ ] Todas las secciones son visibles
- [ ] El preloader aparece y desaparece

### **Navegación**
- [ ] El menú de navegación funciona
- [ ] Los links navegan a las secciones correctas
- [ ] El scroll es suave (smooth scroll)
- [ ] El botón "Scroll to Top" aparece al bajar
- [ ] El menú móvil funciona (reduce ventana a <768px)

### **Hero Section**
- [ ] Tu nombre aparece correctamente
- [ ] El efecto typing funciona (cambia de texto)
- [ ] Las partículas de fondo se mueven
- [ ] Los botones "Descargar CV" y "Contactar" funcionan
- [ ] Los íconos sociales tienen los links correctos

### **About Section**
- [ ] Tu foto aparece (o placeholder)
- [ ] Las estadísticas se animan al hacer scroll
- [ ] Los contadores llegan a los números correctos

### **Experience Section**
- [ ] Los logos de empresas aparecen
- [ ] La timeline es visible
- [ ] Los tech badges se muestran correctamente

### **Skills Section**
- [ ] Las barras de progreso se animan
- [ ] Los porcentajes son correctos
- [ ] Los íconos de tecnologías se muestran

### **Achievements Section**
- [ ] Los números se animan al hacer scroll
- [ ] Las cards tienen el efecto hover

### **Projects Section**
- [ ] Las cards se muestran correctamente
- [ ] Los badges tienen los colores correctos
- [ ] El efecto hover funciona

### **Certifications Section**
- [ ] Los logos de Platzi aparecen
- [ ] Las cards se animan al aparecer

### **Contact Section**
- [ ] El formulario es visible
- [ ] Los campos tienen validación
- [ ] El botón "Enviar" muestra el mensaje de éxito
- [ ] Los links de contacto funcionan (email, WhatsApp, LinkedIn)

### **Responsive**
- [ ] Se ve bien en desktop (>1200px)
- [ ] Se ve bien en tablet (768px - 1200px)
- [ ] Se ve bien en móvil (<768px)
- [ ] El menú hamburguesa funciona en móvil

---

## 🐛 **Solución de Problemas**

### Error: "Python no se reconoce como comando"
**Solución:** Python no está instalado o no está en el PATH.
- Descarga Python desde: https://www.python.org/downloads/
- Durante instalación, marca "Add Python to PATH"

### Error: "http-server no se reconoce"
**Solución:** Node.js no está instalado.
- Descarga Node.js desde: https://nodejs.org/
- Reinicia la terminal después de instalar

### Las imágenes no cargan
**Solución:** Verifica que las imágenes existan en las rutas:
```
assets/images/profile.jpg
assets/images/logos/accenture.png
assets/images/logos/ups.png
assets/images/logos/platzi.png
```

Si no las tienes, usa placeholders temporales:
```html
<!-- En index.html: -->
<img src="https://ui-avatars.com/api/?name=Yeison+Moreno&size=500" alt="Profile">
```

### El CV no descarga
**Solución:** Coloca tu CV en:
```
assets/cv/Yeison_Moreno_CV.pdf
```

Si no lo tienes, el botón no hará nada (lo cual está bien para testing).

### Errores en la consola (F12)
**Solución:**
1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Console"
3. Lee el error específico
4. Busca el error en Google

---

## 📱 **Testing en Móvil**

### Opción 1: Chrome DevTools
1. Abre tu portfolio en Chrome
2. Presiona F12
3. Click en el ícono de móvil (Toggle device toolbar)
4. Selecciona diferentes dispositivos

### Opción 2: En tu Teléfono Real

Si usas Python HTTP Server:

1. Inicia el servidor en tu PC:
   ```bash
   python -m http.server 8000
   ```

2. Averigua tu IP local:
   ```bash
   ipconfig
   # Busca "IPv4 Address" en tu conexión WiFi
   # Ejemplo: 192.168.1.100
   ```

3. En tu teléfono (conectado a la misma WiFi):
   ```
   http://192.168.1.100:8000
   ```

---

## ⚡ **Hot Reload (Auto-refresh)**

Si quieres que la página se recargue automáticamente al hacer cambios:

### Con VS Code Live Server
- Ya tiene hot reload por defecto
- Solo guarda (Ctrl+S) y la página se recarga

### Con Python (Manual)
- Cada vez que hagas cambios, presiona F5 en el navegador

---

## 🎯 **Testing Checklist Final**

Antes de subir a GitHub:

- [ ] Actualicé mi información personal
- [ ] Agregué mis imágenes
- [ ] Agregué mi CV
- [ ] Actualicé los links de redes sociales
- [ ] Probé en Chrome
- [ ] Probé en Firefox
- [ ] Probé en Edge
- [ ] Probé en móvil
- [ ] No hay errores en la consola
- [ ] Todas las animaciones funcionan
- [ ] El formulario valida correctamente
- [ ] Los links externos se abren en nueva pestaña

---

## 📊 **Performance Testing**

Para verificar el performance:

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Click en "Generate report"
4. Espera los resultados

**Objetivo:**
- 🟢 Performance: 90+
- 🟢 Accessibility: 90+
- 🟢 Best Practices: 90+
- 🟢 SEO: 90+

---

## 🔧 **Comandos Útiles**

```bash
# Ver archivos en la carpeta
dir

# Limpiar la terminal
cls

# Verificar Python
python --version

# Verificar Node.js
node --version

# Ver tu IP local
ipconfig

# Abrir en navegador específico
start chrome http://localhost:8000
start firefox http://localhost:8000
start msedge http://localhost:8000
```

---

## 🆘 **¿Algo no funciona?**

1. **Lee los errores en la consola** (F12 → Console)
2. **Verifica que todos los archivos existan**
3. **Prueba con otro navegador**
4. **Reinicia el servidor**
5. **Limpia caché** (Ctrl + Shift + R)

---

## ✅ **Una Vez que Todo Funcione**

Cuando todo esté perfecto:

1. ✅ Commit tus cambios
2. ✅ Sube a GitHub
3. ✅ Activa GitHub Pages
4. ✅ ¡Comparte tu portfolio con el mundo!

---

**Happy Testing! 🚀**

Última actualización: Enero 2025
