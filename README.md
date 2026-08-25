# tomasmunevaresca.com

Sitio personal de **Tomás Munévar Escalante** — Full Stack & AI Engineer, Bogotá.
Una sola página, bilingüe (es-CO / en), construida con Vite + React.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
npm run preview    # sirve dist/ como en producción
npm run lint
```

## Estructura

```
src/
  data/content.js          Todo el texto y los datos, en los dos idiomas.
  sections/                Una sección por archivo (Nav, Hero, Work, …).
  components/reactbits/    Componentes de React Bits (MIT), copiados tal cual.
  components/effects/      Efectos propios (ParticleImage, TiltedTiles, …).
  styles/theme.css         Tokens y base: colores, tipografías, ritmo.
  styles/sections.css      Layout de cada sección.
public/                    Capturas (WebP), logos, cv.pdf, og.jpg, robots, sitemap.
```

**Para cambiar textos, proyectos o trayectoria: `src/data/content.js`.** Es el único
archivo que hay que tocar para actualizar contenido.

## Imágenes

Las capturas y logos van en WebP. Si agregas un PNG o JPG a `public/`:

```bash
npm run optimize:images    # convierte a WebP, redimensiona y borra el original
```

Después hay que apuntar la referencia en `content.js` al `.webp`.

## El CV

`public/cv.pdf` se genera desde **`cv/cv.html`** — el original estaba hecho en Pages y ese
archivo se perdió, así que el CV vive ahora como HTML versionado y se exporta a PDF.

- Fuentes: **Trebuchet MS** (el nombre) + **Carlito**, que es métricamente idéntica a Calibri
  (la del original, que no es libre). Por eso los saltos de línea coinciden.
- Para actualizarlo: editar `cv/cv.html` y volver a exportar a A4 con fondos activados.
  Desde Chrome: Archivo → Imprimir → Guardar como PDF, A4, **márgenes: ninguno**, con
  gráficos de fondo. Los márgenes reales los pone el `@page` del propio documento.
- ⚠️ Exportar **sin extensiones que inyecten interfaz** en la página: se imprimen dentro del
  PDF. Conviene hacerlo en una ventana de incógnito.

## Despliegue

Build estático: `npm run build` → publicar `dist/`.

- **Directorio de publicación:** `dist`
- **Comando de build:** `npm run build`
- `public/_redirects` cubre Netlify: `/services` → `/#capabilities` y el fallback SPA.
  En Vercel u otro host hay que replicar esas dos reglas.

Antes de publicar conviene correr Lighthouse contra `npm run preview`.

## Estado de la auditoría (25 ago 2026)

| | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Móvil | 97 | 100 | 100 | 100 |
| Escritorio | 100 | 100 | 100 | 100 |

## Pendientes

- El CV conserva dos erratas del original que se dejaron a propósito: `/Prisma` con barra
  suelta y `Cron Jobs` repetido en dos columnas de SKILLS.
- La experiencia más antigua del CV empieza en nov 2023; el resumen dice "4+ years". Si hace
  falta sostenerlo con fechas, añadir la etapa freelance 2022–2024 que sí está en el sitio.
- El caso Module Flow Engine cita una investigación de Yale con la Universidad Javeriana.
- Los logos de TetherEd, Soy Henry, MindMarks y Gestocker están **redibujados a mano**
  en `public/logos/`; si aparecen los oficiales, basta reemplazar el archivo.
