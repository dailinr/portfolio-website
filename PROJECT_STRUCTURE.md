# Portafolio Web - Estructura del Proyecto

## 📁 Estructura de Carpetas

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx          # Layout raíz con metadatos y configuración global
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y design system
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Sidebar.tsx         # Barra lateral con redes sociales
│   └── Hero.tsx            # Sección hero/presentación
├── public/                 # Archivos estáticos
├── package.json            # Dependencias del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## 🎨 Design System

### Colores
- **Fondo Principal**: `#191C22`
- **Texto Principal**: `#FFFFFD`
- **Acento (Amarillo)**: `#F8CD68`
- **Texto Secundario**: `#6D7076`
- **Texto Terciario**: `#898C92`

### Tipografía
- **Font**: Plus Jakarta Sans (importada desde Google Fonts)
- **Pesos disponibles**: 400, 500, 600, 700

## 📦 Componentes Creados

### 1. **Navbar.tsx**
- Navbar fijo en la parte superior
- Logo/Inicial "DR"
- Enlaces de navegación: Experiencia, Proyectos, Sobre mí, Contacto
- Soporte para menú móvil
- Indicador visual del enlace activo en amarillo

### 2. **Sidebar.tsx**
- Barra lateral fija en la izquierda (solo en lg y superiores)
- Enlaces a redes sociales (GitHub, LinkedIn, Behance)
- Decoración visual con líneas verticales degradadas

### 3. **Hero.tsx**
- Sección de presentación/introducción
- Nombre del usuario: "Dailin Romero"
- Título principal: "Desarrolladora Web Full-Stack"
- Descripción del perfil
- Dos botones de acción: "Ponte en contacto" y "Mi trabajo"
- Contenedor de imagen de perfil con efecto de resplandor
- Layout responsive (1 columna en móvil, 2 columnas en desktop)

## 🔧 Cómo Personalizar

### Cambiar el Nombre
Edita `components/Hero.tsx`:
```tsx
// Línea ~15
<div className="text-secondary text-sm lg:text-base font-medium">
  Tu Nombre.
</div>

// Línea ~24
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
  Tu Título Principal
</h1>
```

### Cambiar la Descripción
Edita `components/Hero.tsx`:
```tsx
// Línea ~33
<p className="text-tertiary text-base md:text-lg leading-relaxed max-w-lg">
  Tu descripción aquí
</p>
```

### Cambiar Enlaces de Navegación
Edita `components/Navbar.tsx`:
```tsx
// Línea ~9
const navLinks: NavLink[] = [
  { label: 'Tu enlace', href: '#tu-seccion', isActive: false },
  // ... más enlaces
]
```

### Cambiar Redes Sociales
Edita `components/Sidebar.tsx`:
```tsx
// Línea ~9
const socialLinks: SocialLink[] = [
  {
    icon: (SVG aquí),
    href: 'https://tu-enlace.com',
    label: 'Tu Red',
  },
]
```

### Agregar tu Foto de Perfil
En `components/Hero.tsx`, reemplaza el contenedor de imagen placeholder por:
```tsx
<Image
  src="/images/tu-foto.jpg"
  alt="Tu nombre"
  fill
  className="object-cover"
/>
```

Y agrega la imagen a `/public/images/tu-foto.jpg`.

### Personalizar Colores
Edita `app/globals.css`:
```css
@theme inline {
  --color-primary: #TU_COLOR;
  --color-background: #TU_COLOR;
  --color-foreground: #TU_COLOR;
  --color-secondary: #TU_COLOR;
  --color-tertiary: #TU_COLOR;
}
```

## 🚀 Siguientes Pasos

1. **Agregar más secciones**: Crea nuevos componentes para Experiencia, Proyectos, Contacto, etc.
2. **Agregar animaciones**: Una vez que decidas, integra Framer Motion para smooth motion
3. **Reemplazar placeholder**: Cambia la imagen de perfil con tu foto real
4. **SEO y metadata**: Actualiza `app/layout.tsx` con tus datos

## 🎯 Próximas Funcionalidades Planeadas

- [ ] Sección de Experiencia laboral
- [ ] Sección de Proyectos destacados
- [ ] Sección "Sobre mí"
- [ ] Formulario de contacto
- [ ] Animaciones suave (Framer Motion)
- [ ] Dark mode toggle (opcional)

## 📱 Responsive Design

- **Mobile**: 375px - Menú hamburguesa, un colunma
- **Tablet**: 768px - Layouts adaptados
- **Desktop**: 1024px+ - Dos columnas, sidebar visible

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui
- **Fuentes**: Plus Jakarta Sans (Google Fonts)
