# 🌟 Portafolio Web - Dailin Romero

Tu portafolio web profesional construido con **Next.js 16**, **TypeScript**, **Tailwind CSS** y un diseño moderno oscuro.

## 🎨 Características Principales

✅ **Diseño Moderno y Escalable**: Arquitectura limpia con componentes reutilizables  
✅ **Totalmente Responsivo**: Se adapta perfectamente a cualquier dispositivo  
✅ **Tema Oscuro Elegante**: Paleta de colores profesional (azul oscuro + amarillo)  
✅ **Navegación Intuitiva**: Navbar fijo y sidebar con redes sociales  
✅ **Sección Hero Impactante**: Presentación profesional con llamada a la acción  
✅ **Preparado para Animaciones**: Estructura lista para Framer Motion (próximamente)  

## 📸 Vista Previa

### Desktop
![Desktop Preview](/tmp/agent-browser/portfolio-desktop.png)

### Mobile
![Mobile Preview](/tmp/agent-browser/portfolio-mobile.png)

## 🚀 Instalación Rápida

### Opción 1: Clonar desde GitHub (Recomendado)
```bash
git clone <tu-repo-url>
cd portafolio
pnpm install
pnpm dev
```

### Opción 2: Usar el CLI de shadcn
```bash
pnpm create next-app@latest --template=shadcn/next my-portfolio
cd my-portfolio
pnpm dev
```

## 📝 Configuración Inicial

### 1️⃣ Personaliza tus Datos

**Navbar** (`components/Navbar.tsx`):
```tsx
const navLinks: NavLink[] = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi', isActive: true },
  { label: 'Contacto', href: '#contacto' },
]
```

**Hero Section** (`components/Hero.tsx`):
```tsx
// Línea 12 - Tu nombre
<div className="text-secondary text-sm lg:text-base font-medium">
  Dailin Romero.
</div>

// Línea 18 - Tu título
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
  Desarrolladora Web Full-Stack.
</h1>

// Línea 27 - Tu descripción
<p className="text-tertiary text-base md:text-lg leading-relaxed">
  Construyendo soluciones completas...
</p>
```

### 2️⃣ Agrega tu Foto

Reemplaza el placeholder en `components/Hero.tsx`:

```tsx
import Image from 'next/image'

// Reemplaza el div del placeholder con:
<Image
  src="/images/profile.jpg"
  alt="Tu Nombre"
  fill
  className="object-cover"
/>
```

Coloca tu imagen en `/public/images/profile.jpg`.

### 3️⃣ Actualiza tus Redes Sociales

Edita `components/Sidebar.tsx` y actualiza los enlaces:
```tsx
const socialLinks: SocialLink[] = [
  {
    icon: (/* SVG GitHub */),
    href: 'https://github.com/tu-usuario',
    label: 'GitHub',
  },
  // ... más redes
]
```

### 4️⃣ Personaliza Colores (Opcional)

Edita `app/globals.css`:
```css
@theme inline {
  --color-primary: #F8CD68;           /* Tu color acento */
  --color-background: #191C22;        /* Fondo */
  --color-foreground: #FFFFFD;        /* Texto principal */
  --color-secondary: #6D7076;         /* Texto secundario */
  --color-tertiary: #898C92;          /* Texto terciario */
}
```

## 🎯 Estructura de Carpetas

```
components/
├── Navbar.tsx          # Barra de navegación
├── Sidebar.tsx         # Redes sociales
└── Hero.tsx            # Sección principal

app/
├── layout.tsx          # Layout raíz
├── page.tsx            # Página principal
├── globals.css         # Estilos globales
└── favicon.ico         # Favicon

public/
└── images/
    └── profile.jpg     # Tu foto (agregar)
```

## 🔧 Comandos Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor en localhost:3000

# Producción
pnpm build            # Construye la app
pnpm start            # Inicia servidor de producción

# Linting
pnpm lint             # Verifica errores de código
```

## 📋 Próximos Pasos

### Corto Plazo (Essential)
- [ ] Cambiar nombre y datos personales
- [ ] Agregar tu foto de perfil
- [ ] Actualizar redes sociales

### Mediano Plazo (Recommended)
- [ ] Crear sección "Experiencia"
- [ ] Crear sección "Proyectos"
- [ ] Crear sección "Sobre mí"
- [ ] Agregar formulario de contacto
- [ ] Conectar Framer Motion para animaciones

### Largo Plazo (Enhanced)
- [ ] Blog de artículos
- [ ] Sistema de contacto por email
- [ ] Dark/Light mode toggle
- [ ] Analytics (Google Analytics)

## 🎨 Paleta de Colores

| Nombre | Código | Uso |
|--------|--------|-----|
| Background | `#191C22` | Fondo principal |
| Foreground | `#FFFFFD` | Texto principal |
| Accent | `#F8CD68` | Botones, links activos |
| Secondary | `#6D7076` | Texto secundario |
| Tertiary | `#898C92` | Texto descriptivo |

## 🌐 Deployment

### Opción 1: Vercel (Recomendado)
```bash
pnpm install -g vercel
vercel
```

### Opción 2: Netlify
1. Sube tu repo a GitHub
2. Conecta en netlify.com
3. Build command: `pnpm build`
4. Publish directory: `.next`

### Opción 3: GitHub Pages + GitHub Actions
Configurar acciones para deployment automático.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

## 🔐 SEO & Metadata

Actualiza en `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Tu Nombre - Desarrolladora Full-Stack',
  description: 'Tu descripción profesional',
  openGraph: {
    title: 'Tu Nombre',
    description: 'Tu descripción',
    // ... más config
  }
}
```

## 🤝 Contribuir

Para mejoras o sugerencias, abre un issue o PR.

## 📄 Licencia

Este proyecto es personal. Siéntete libre de personalizarlo como necesites.

## 📞 Contacto

Para preguntas sobre la estructura o setup, revisa la documentación en `PROJECT_STRUCTURE.md`.

---

**Construido con ❤️ usando Next.js, TypeScript y Tailwind CSS**

*¡Comienza tu portafolio hoy mismo y comparte tu mejor trabajo al mundo! 🚀*
