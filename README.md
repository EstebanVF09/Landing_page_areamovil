# Areamovil — Sitio web corporativo

Sitio web institucional de **Areamovil**, estudio de diseño UX/UI con sede en Colombia. Construido con Astro y Tailwind CSS a partir de un diseño en Figma Make, sin dependencias de React ni librerías de animación externas.

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| [Astro](https://astro.build) | `^4.16.0` | Framework principal — generación estática (SSG) |
| [Tailwind CSS](https://tailwindcss.com) | `^3.4.14` | Sistema de utilidades CSS |
| `@astrojs/tailwind` | `^5.1.0` | Integración Astro ↔ Tailwind |
| TypeScript | via Astro | Tipado en frontmatter de componentes |
| Vanilla JS | — | Interacciones del cliente (header scroll, mobile menu, reveal observer) |

> No hay React, Vue ni ningún framework de UI del lado del cliente. Todo el HTML se genera en el servidor en tiempo de build.

---

## Estructura del proyecto

```
Proyecto/
├── public/
│   ├── favicon.svg              # Ícono de la pestaña (SVG con colores de marca)
│   └── assets/                  # Imágenes del diseño (colocar manualmente)
│       ├── 51b9d4cc...png       # Logo Areamovil
│       ├── 18055adf...png       # Imagen equipo (Team Hero)
│       ├── a92acfbf...png       # Logos de clientes (Proyectos Hero)
│       ├── 21456527...png       # Proyecto Coomeva
│       ├── 7d192560...png       # Proyecto Mapfre
│       └── a3380838...png       # Proyecto Homecenter
│
├── src/
│   ├── styles/
│   │   └── global.css           # Tailwind directives + tokens + animaciones CSS
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML shell, Header, Footer, IntersectionObserver
│   │
│   ├── components/
│   │   ├── Header.astro         # Navegación sticky con scroll effect y mobile menu
│   │   ├── Footer.astro         # Footer con links, contacto y redes sociales
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ValueProposition.astro
│   │   │   ├── Capabilities.astro
│   │   │   ├── Process.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Metrics.astro
│   │   │   ├── TeamPreview.astro
│   │   │   └── CTAFinal.astro
│   │   │
│   │   ├── proyectos/
│   │   │   ├── ProyectosHero.astro
│   │   │   ├── IntroduccionEditorial.astro
│   │   │   ├── CasoDetallado.astro      # Componente reutilizable con Props tipados
│   │   │   ├── BloqueEnfoque.astro
│   │   │   └── ProyectosCTA.astro
│   │   │
│   │   ├── team/
│   │   │   ├── TeamHero.astro
│   │   │   ├── IntroduccionEquipo.astro
│   │   │   ├── FilosofiaColaborativa.astro
│   │   │   ├── RolesClave.astro          # Expandable con <details>/<summary> nativo
│   │   │   ├── CapacidadesTransversales.astro
│   │   │   └── TeamCTA.astro
│   │   │
│   │   └── proceso/
│   │       ├── ProcesoHero.astro
│   │       ├── IntroduccionProceso.astro
│   │       ├── PrincipiosProceso.astro
│   │       ├── EtapasProceso.astro       # Timeline de 6 etapas con layout alternado
│   │       ├── MetodologiasProceso.astro
│   │       └── CierreProceso.astro
│   │
│   └── pages/
│       ├── index.astro          # /
│       ├── proyectos.astro      # /proyectos
│       ├── team.astro           # /team
│       ├── proceso.astro        # /proceso
│       └── 404.astro            # Página de error personalizada
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Páginas

| Ruta | Componentes principales |
|---|---|
| `/` | Hero, ValueProposition, Capabilities, Process, Projects, Metrics, TeamPreview, CTAFinal |
| `/proyectos` | ProyectosHero, IntroduccionEditorial, CasoDetallado ×3, BloqueEnfoque, ProyectosCTA |
| `/team` | TeamHero, IntroduccionEquipo, FilosofiaColaborativa, RolesClave, CapacidadesTransversales, TeamCTA |
| `/proceso` | ProcesoHero, IntroduccionProceso, PrincipiosProceso, EtapasProceso, MetodologiasProceso, CierreProceso |

---

## Tokens de color (Tailwind)

Definidos en `tailwind.config.mjs` y disponibles como clases `bg-*`, `text-*`, `border-*`:

| Token | Hex | Uso |
|---|---|---|
| `am-dark` | `#001D38` | Fondo principal, superficies oscuras |
| `am-blue` | `#003F79` | Gradientes de fondo, profundidad |
| `am-blue-mid` | `#014D94` | Acentos secundarios, nodos de proceso |
| `am-accent` | `#0A84FF` | Color de acento primario, bordes activos, CTA secundario |
| `am-yellow` | `#FFC501` | CTA primario, highlights, estados activos en nav |

Todos los tokens soportan el modificador de opacidad de Tailwind (`bg-am-accent/20`, `text-am-yellow/60`, etc.).

---

## Sistema de animaciones

Las animaciones reemplazan `framer-motion` con CSS puro + `IntersectionObserver`. No requieren JavaScript en componentes individuales.

### Clases de reveal (scroll-triggered)

Aplicar al elemento. La animación se dispara cuando entra al viewport:

```html
<div class="reveal">Aparece desde abajo</div>
<div class="reveal-left">Aparece desde la izquierda</div>
<div class="reveal-right">Aparece desde la derecha</div>
<div class="reveal-scale">Aparece escalando</div>
```

Para controlar el delay (en segundos):
```html
<div class="reveal" data-delay="0.2">Con 200ms de delay</div>
```

### Clases de animación continua

```html
<div class="animate-float">       <!-- Flotación vertical suave -->
<div class="animate-float-rev">   <!-- Flotación inversa -->
<div class="animate-float-x">     <!-- Flotación diagonal -->
<div class="animate-pulse-glow">  <!-- Pulso con glow -->
<div class="animate-pulse-dot">   <!-- Pulso de punto -->
<div class="animate-spin-slow">   <!-- Rotación lenta -->
<div class="animate-bounce-y">    <!-- Rebote vertical -->
```

### Progress bars

La barra anima de 0 al ancho definido por `width` inline cuando su contenedor entra al viewport:

```html
<div class="h-3 rounded-full overflow-hidden">
  <div
    class="h-full rounded-full progress-bar"
    style="width: 85%; background: #0A84FF; --bar-delay: 0.5s"
  ></div>
</div>
```

### Patrones de fondo

```html
<div class="bg-grid">       <!-- Cuadrícula fina azul -->
<div class="bg-grid-lg">    <!-- Cuadrícula grande azul tenue -->
<div class="bg-dots">       <!-- Puntos azules -->
<div class="bg-dots-yellow"><!-- Puntos amarillos -->
```

---

## Arquitectura de componentes

### BaseLayout

El layout base maneja:
- HTML shell con metadatos SEO (`title`, `description`)
- Import de `global.css`
- Header y Footer como slots fijos
- `<script>` global con los dos `IntersectionObserver`:
  - **RevealObserver**: activa `.visible` en elementos `.reveal*`
  - **BarObserver**: activa `.animate` en elementos `.progress-bar`

### Header

- Detección de página activa mediante `Astro.url.pathname` (server-side, sin JS)
- Efecto scroll: clase `.scrolled` añadida via JS con `window.addEventListener('scroll')`
- Mobile menu: toggle con `classList.toggle('hidden')`, sin dependencias

### CasoDetallado (componente reutilizable)

El único componente con Props tipados explícitos. Acepta:

```typescript
interface Props {
  id: string;
  nombre: string;
  categorias: string[];
  descripcion: string;
  objetivos: string[];
  retos: string[];
  logros: string[];
  imagen: string;
}
```

Se instancia en `proyectos.astro` pasando los datos de cada cliente directamente en el frontmatter de la página.

### RolesClave — Expandable nativo

Los cards expandibles usan `<details>/<summary>` HTML nativo, sin JavaScript. El estado abierto/cerrado se maneja con CSS:

```css
.group-open/details:hidden  /* visible cuando cerrado */
.hidden.group-open/details:inline  /* visible cuando abierto */
```

---

## Imágenes

Las imágenes provienen del proyecto Figma Make (fileKey `DRoEY9TfPltGu0jtb1utgK`). Se referencian con sus hashes originales y deben colocarse manualmente en `public/assets/`:

| Archivo | Uso |
|---|---|
| `51b9d4cc2d7f97a1f13cce2d0e93663c9bc9d047.png` | Logo Areamovil (Header y Footer) |
| `18055adf04ea951de99a60e55ddd85d86417c8a8.png` | Fotografía equipo (TeamHero) |
| `a92acfbff7a81e9821e6d755039de0c05c899fb0.png` | Grid de logos clientes (ProyectosHero) |
| `21456527492b2b32b0fe766b61a822aed5b8c9f9.png` | Screenshot proyecto Coomeva |
| `7d192560a202c664af1c97e0ede02a99f3675968.png` | Screenshot proyecto Mapfre |
| `a3380838d93eadc2dc9034d6cd51d32201a52e45.png` | Screenshot proyecto Homecenter |

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Flujo de trabajo con Figma MCP

Este proyecto fue generado usando el servidor MCP oficial de Figma a través de Claude Code. El flujo estándar para actualizar el diseño es:

1. Obtener el contexto actualizado del nodo Figma con `get_design_context`
2. Adaptar el output React+Tailwind a componentes `.astro`
3. Crear rama `feature/figma-update-[fecha]-[descripcion]`
4. Commit con prefijo `[AUTO] Update from Figma MCP`
5. PR hacia `dev` para revisión humana antes de merge

**FileKey Figma:** `DRoEY9TfPltGu0jtb1utgK`

---

## Rama principal y despliegue

| Rama | Propósito |
|---|---|
| `dev` | Rama de integración — destino de todos los PRs |
| `main` / `master` | Producción — merge manual desde `dev` tras revisión |

> Los despliegues automáticos a producción **no están configurados** en este repositorio. El merge a la rama de producción requiere revisión humana explícita.

---

## Contacto

**Areamovil**
contactenos@areamovil.com.co — Colombia
