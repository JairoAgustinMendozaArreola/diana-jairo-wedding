# Diana & Jairo — Wedding Invitation

Invitación digital de boda desarrollada como una experiencia web editorial, responsive e interactiva.

El proyecto combina diseño editorial, desarrollo frontend y despliegue en la nube para transformar una invitación tradicional en una experiencia digital optimizada para dispositivos móviles y escritorio.

## ✨ Características

- Diseño editorial tipo revista digital
- Diseño responsive para móvil y escritorio
- Animaciones activadas mediante scroll
- Cuenta regresiva en tiempo real
- Galería fotográfica responsive
- Integración con Google Maps
- Reproducción opcional de audio
- Microinteracciones y transiciones
- Soporte para `prefers-reduced-motion`
- Lazy loading de imágenes
- Navegación mediante anclas
- Despliegue mediante Firebase Hosting
- HTTPS en producción

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- Intersection Observer API
- HTML Audio API
- Git
- GitHub
- Firebase Hosting
- Google Cloud Platform

## 🎨 Diseño

La interfaz está inspirada en publicaciones editoriales y revistas digitales.

El diseño utiliza:

- composiciones asimétricas;
- tipografía serif combinada con sans-serif;
- espacios negativos;
- fotografías en diferentes proporciones;
- jerarquía tipográfica de gran formato;
- una paleta neutra;
- animaciones sutiles.

El enfoque fue mantener una estética elegante sin sacrificar rendimiento ni experiencia móvil.

## ⚙️ Funcionalidades

### Countdown

La invitación calcula en tiempo real el tiempo restante hasta el evento utilizando JavaScript.

### Scroll animations

Las animaciones utilizan `IntersectionObserver` para detectar cuándo los elementos entran en el viewport.

Esto permite activar las transiciones únicamente cuando son necesarias.

### Reduced motion

El sitio respeta la preferencia de accesibilidad:

```css
@media (prefers-reduced-motion: reduce)
```

Los usuarios que hayan configurado reducción de movimiento pueden visualizar el contenido sin las animaciones.

### Audio

La música es opcional y requiere interacción del usuario para comenzar la reproducción.

El control actualiza también atributos ARIA para reflejar su estado de reproducción.

### Gallery

Las fotografías utilizan diferentes composiciones mediante CSS Grid y `object-fit: cover`, permitiendo mantener el diseño responsive sin deformar las imágenes.

## ☁️ Deployment

El sitio se encuentra desplegado utilizando Firebase Hosting.

El flujo utilizado para llevar el proyecto a producción fue:

```text
Local Development
       ↓
      Git
       ↓
     GitHub
       ↓
Firebase Hosting
       ↓
Google Cloud Platform
       ↓
     HTTPS
```

Firebase Hosting permite servir los archivos estáticos mediante CDN y HTTPS.

## 📁 Estructura

```text
diana-jairo-wedding/
│
├── assets/
│   ├── audio/
│   └── images/
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── index.html
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

## 🚀 Ejecutar localmente

El proyecto no requiere framework ni proceso de compilación.

Clona el repositorio:

```bash
git clone https://github.com/JairoAgustinMendozaArreola/diana-jairo-wedding.git
```

Entra al proyecto:

```bash
cd diana-jairo-wedding
```

Puedes abrir `index.html` directamente en el navegador o utilizar un servidor de desarrollo local.

## 🌐 Producción

La aplicación está desplegada mediante Firebase Hosting.

**Live Demo:**  
`https://diana-jairo-wedding.web.app/`

## 💡 Aprendizajes

Este proyecto me permitió trabajar de principio a fin en el ciclo de vida de una aplicación web:

- construcción de interfaces responsive;
- diseño mobile-first;
- manipulación del DOM con JavaScript;
- APIs nativas del navegador;
- accesibilidad web;
- optimización de assets;
- control de versiones con Git;
- repositorios remotos con GitHub;
- configuración de Firebase;
- despliegue de una aplicación estática en Google Cloud.

## 📌 Estado

Proyecto desplegado y funcional.

---

Developed by **Jairo Mendoza**