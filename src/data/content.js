/* ============================================================
   Contenido del sitio. Bilingüe (es-CO / en).
   Los metadatos neutros (links, tecnologías, años) viven en
   PROJECTS; el copy traducible vive dentro de cada idioma.
   ============================================================ */

export const PROFILE = {
  name: 'Tomás Munévar Escalante',
  short: 'Tomás Munévar',
  email: 'tomasmunevar36@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tomasmunevaresca/',
  github: 'https://github.com/Tomas36M',
  site: 'https://www.tomasmunevaresca.com',
  cv: '/cv.pdf',
  location: 'Bogotá, Colombia',
  /* Recorte de retrato servido por Cloudinary: encuadre cerrado para que el
     efecto de partículas siga siendo legible a tamaño pequeño. */
  photo:
    'https://res.cloudinary.com/dge1sssip/image/upload/f_auto,c_thumb,g_face,z_0.32,w_900,h_1125,q_auto/v1754758956/462582772_10229403398162980_5072953741625358888_n_orhiiq.jpg',
  /* Recorte cerrado a la cara, para la tarjeta de contacto. */
  photoFace:
    'https://res.cloudinary.com/dge1sssip/image/upload/f_auto,c_thumb,g_face,z_0.72,w_360,h_360,q_auto/v1754758956/462582772_10229403398162980_5072953741625358888_n_orhiiq.jpg',
  photoFull:
    'https://res.cloudinary.com/dge1sssip/image/upload/v1754758956/462582772_10229403398162980_5072953741625358888_n_orhiiq.jpg'
};

/* Orden = orden en el grid. Los 7 que venden. */
export const PROJECTS = [
  {
    id: 'nebula',
    name: 'Nebula · Scribe',
    years: '2025 — 2026',
    image: '/nebula-screenshot.webp',
    href: 'https://nebula.med/',
    repo: null,
    confidential: true,
    accent: '#4c6fff',
    tech: ['TypeScript', 'NestJS', 'React', 'LangChain', 'Deepgram', 'Azure', 'FHIR / HL7', 'gRPC', 'PostgreSQL']
  },
  {
    id: 'luci',
    name: 'LUCI',
    years: '2026',
    image: '/project-luci.webp',
    href: 'https://luci.education',
    repo: null,
    confidential: true,
    accent: '#8ea8d8',
    tech: ['React', 'Vite', 'Supabase', 'ElevenLabs', 'Twilio', 'Edge Functions', 'Deno', 'PostgreSQL']
  },
  {
    id: 'moduleFlow',
    name: 'Module Flow Engine',
    years: '2026',
    image: '/project-module-flow.webp',
    href: 'https://surveybuilder-tether.web.app',
    repo: null,
    confidential: false,
    accent: '#e3b23c',
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Handlebars', 'Firebase Hosting']
  },
  {
    id: 'tetherStudio',
    name: 'Tether Studio',
    years: '2026',
    image: '/project-tether-studio.webp',
    href: null,
    repo: null,
    confidential: true,
    accent: '#22d3ee',
    tech: ['TanStack Start', 'React 19', 'Tailwind 4', 'Supabase', 'RLS', 'Edge Functions', 'IA generativa']
  },
  {
    id: 'zakumi',
    name: 'Zakumi Estudio',
    years: '2026 →',
    image: '/project-zakumi.webp',
    href: 'https://zakumistudio.com',
    repo: null,
    confidential: false,
    accent: '#db5227',
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'Claude', 'Google Places', 'GSAP', 'Vercel']
  },
  {
    id: 'medispro',
    name: 'Medispro',
    years: '2026',
    image: '/project-medispro.webp',
    href: 'https://medispro.com.co',
    repo: null,
    confidential: false,
    accent: '#dc1e3f',
    tech: ['Next.js 14', 'TypeScript', 'CSS propio', 'Vercel', 'SEO técnico']
  },
  {
    id: 'crowdi',
    name: 'Crowdi',
    years: '2025',
    image: '/crowdi-screenshot.webp',
    href: 'https://crowdi.ar/',
    repo: null,
    confidential: true,
    accent: '#22c55e',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL']
  }
];

/* `wordmark: true` = el logo YA dice el nombre, así que va solo y más grande.
   El resto son marcas cuadradas: van en un chip, con el nombre al lado. */
export const ORGS = [
  { name: 'Pontificia Universidad Javeriana', logo: '/logos/javeriana.webp' },
  { name: 'ConsiliumBots', logo: '/logos/consiliumbots.svg', wordmark: true },
  { name: 'Tether Education', logo: '/logos/tethered.svg' },
  { name: 'Nebula Medical', logo: '/logos/nebula.webp' },
  { name: 'Crowdi', logo: '/logos/crowdi-mark.webp' },
  { name: 'Zakumi Estudio', logo: '/logos/zakumi.webp' }
];

export const STACK = [
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/EDEEF2' },
  { name: 'NestJS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Anthropic', src: 'https://cdn.simpleicons.org/anthropic/EDEEF2' },
  { name: 'OpenAI', src: '/openai.svg' },
  { name: 'Gemini', src: 'https://cdn.simpleicons.org/googlegemini/8b5cf6' },
  { name: 'LangChain', src: 'https://cdn.simpleicons.org/langchain/EDEEF2' },
  { name: 'ElevenLabs', src: 'https://cdn.simpleicons.org/elevenlabs/EDEEF2' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Prisma', src: 'https://cdn.simpleicons.org/prisma/EDEEF2' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Terraform', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
  { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Google Cloud', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/EDEEF2' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/EDEEF2' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
];

/* ------------------------------------------------------------------ */

export const content = {
  es: {
    meta: {
      title: 'Tomás Munévar — Full Stack & AI Engineer',
      description:
        'Ingeniero de software con 4+ años construyendo plataformas de IA en producción. TypeScript, LLMs, agentes de voz y la infraestructura que los sostiene. Trabajo con la Pontificia Universidad Javeriana, ConsiliumBots y Tether Studio desde Bogotá.'
    },

    nav: {
      work: 'Trabajo',
      about: 'Perfil',
      experience: 'Trayectoria',
      contact: 'Contacto',
      cv: 'CV',
      langLabel: 'cambiar idioma'
    },

    hero: {
      eyebrow: 'Full Stack · IA · Producto',
      titleA: 'Construyo plataformas de IA que ',
      titleAccent: 'llegan a producción.',
      titleB: '',
      roles: ['Full Stack Engineer', 'AI / LLM Engineer', 'Product Engineer'],
      lede: '+4 años construyendo producto de punta a punta: TypeScript, agentes de IA que hacen trabajo real y la infraestructura que los mantiene en pie. Hoy trabajo con la Pontificia Universidad Javeriana, ConsiliumBots y Tether Studio en plataformas que usan gobiernos, colegios y clínicas.',
      ctaWork: 'Ver el trabajo',
      ctaTalk: 'Hablemos',
      available: 'Abierto a roles senior · remoto',
      scroll: 'Baja'
    },

    metrics: [
      { text: '+4 años', label: 'construyendo producto de punta a punta' },
      { value: 12, suffix: '', label: 'Productos en producción' },
      { value: 5, suffix: '', label: 'Industrias: salud, educación, fintech, retail, medios' },
      { value: 3, suffix: '', label: 'Países: Colombia, Chile, España' }
    ],

    trust: { label: 'He construido con' },

    about: {
      eyebrow: 'Perfil',
      title: 'Mi trabajo es que algo exista.',
      reveal:
        'Un agente que llama por teléfono y actualiza una base de datos. Un sistema que convierte una consulta médica en una nota clínica. Un constructor de encuestas detrás de una investigación de Yale con la Javeriana. Escribo el código y además decido qué hay que construir: elijo la tecnología después de entender el problema, nunca antes.',
      body: [
        'Soy ingeniero full stack especializado en TypeScript y en llevar modelos de lenguaje a producción de verdad: con límites de gasto, trazas, versionado de prompts, permisos por fila y un plan para cuando el proveedor se cae.',
        'He trabajado en salud digital (FHIR/HL7, transcripción clínica), en investigación educativa con universidades e instituciones públicas, en fintech y en mi propia empresa. En todos los casos me tocó lo mismo: entender el negocio, decidir la arquitectura, escribirla y sostenerla.',
        'Escribo, documento y dejo el trabajo listo para que otro lo tome. Español nativo, inglés C1.'
      ],
      nowLabel: 'Ahora mismo',
      now: [
        'Agentes de voz que llaman a jardines infantiles y actualizan sus datos, en LUCI.',
        'El centro de control de Zakumi: prospección, cobros y bots en un solo panel.',
        'Encuestas condicionales para investigación educativa, usadas en tres países.'
      ],
      factsLabel: 'Datos',
      facts: [
        ['Base', 'Bogotá, Colombia · remoto'],
        ['Idiomas', 'Español nativo · Inglés C1'],
        ['Enfoque', 'IA aplicada, producto y plataforma'],
        ['Disponible', 'Roles senior full stack / IA']
      ]
    },

    capabilities: {
      eyebrow: 'Qué hago',
      title: 'Cuatro cosas, hechas bien.',
      items: [
        {
          title: 'Sistemas de IA en producción',
          body: 'Agentes que hacen trabajo real, no demos. Orquestación multi-modelo (Anthropic, OpenAI, Gemini) con LangChain y LangSmith, voz con Deepgram y ElevenLabs, versionado de prompts con diff y rollback, dry-run cuando falta un secreto y topes de gasto por día.',
          tags: ['LangChain', 'Anthropic', 'OpenAI', 'Gemini', 'Deepgram', 'ElevenLabs', 'RAG', 'Evals']
        },
        {
          title: 'Ingeniería de producto de punta a punta',
          body: 'De la conversación con el cliente al deploy. Next.js, React 19, NestJS, TanStack, Supabase y PostgreSQL. Modelo de datos, seguridad por fila, edge functions, pruebas end-to-end y CI que corre solo.',
          tags: ['Next.js', 'React', 'NestJS', 'TanStack', 'Supabase', 'PostgreSQL', 'Prisma', 'Zod']
        },
        {
          title: 'Plataforma e infraestructura',
          body: 'Azure, AWS, Google Cloud, Vercel, Firebase, Docker y Terraform. Webhooks firmados con HMAC, colas y crons con tope, escrituras idempotentes, observabilidad y despliegues que no despiertan a nadie de madrugada.',
          tags: ['Azure', 'AWS', 'GCP', 'Docker', 'Terraform', 'Vercel', 'CI/CD']
        },
        {
          title: 'Criterio de producto y liderazgo',
          body: 'Specs, ADRs e issues listos para que otro los tome. He llevado pivotes completos de producto junto a fundadores e investigadores, y he sido el puente entre el equipo técnico y quien firma el cheque.',
          tags: ['PRDs', 'ADRs', 'Discovery', 'Mentoría', 'Trato con cliente']
        }
      ]
    },

    work: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Siete que valen la pena contar.',
      subtitle:
        'Plataformas reales, con usuarios reales. Algunas son código propietario: cuento lo que puedo contar.',
      viewCase: 'Ver el caso',
      visit: 'Visitar sitio',
      repo: 'Repositorio',
      close: 'Cerrar',
      confidential: 'Código propietario · muestro producto, no repositorio',
      role: 'Mi rol',
      highlights: 'Lo que construí',
      builtWith: 'Construido con'
    },

    projects: {
      nebula: {
        role: 'Full Stack Developer & Product Manager',
        tagline: 'Documentación clínica con IA',
        summary:
          'Plataforma que convierte la conversación entre médico y paciente en una nota clínica estructurada, en tiempo real, y la escribe en la historia clínica que el hospital ya usa.',
        highlights: [
          'Orquestación multi-modelo con LangChain y LangSmith (Anthropic, OpenAI, Gemini) con failover entre proveedores.',
          'Transcripción de voz en vivo con Deepgram y pipeline de post-proceso afinado para lenguaje clínico.',
          'Interoperabilidad FHIR y HL7 para escribir en sistemas de historia clínica existentes.',
          'Pasarela de pagos por gRPC y trabajos en background con Trigger.dev sobre Azure.',
          'Objetivo de producto: hasta 70% menos tiempo escribiendo notas y menos desgaste para el médico.'
        ]
      },
      moduleFlow: {
        role: 'Full Stack Engineer — ConsiliumBots · Tether Education',
        tagline: 'Constructor visual de encuestas y flujos',
        summary:
          'Un editor drag-and-drop donde un investigador arma instrumentos complejos sin escribir una línea de código, los publica y reparte links personalizados.',
        highlights: [
          'Motor de flujo con routers condicionales, repeticiones y piping de variables con Handlebars.',
          'Instrumento de 42 módulos condicionales en producción para una investigación de Yale desarrollada junto a la Pontificia Universidad Javeriana.',
          'Un link corto y personalizado por familia generado desde CSV, con el contexto embebido en el share en vez de viajar en la URL.',
          'Mapas interactivos, matrices de sliders con etiquetas y validación end-to-end de 30 pasos en producción.',
          'Despliegue continuo a Firebase Hosting con previews efímeras por pull request.'
        ]
      },
      luci: {
        role: 'Full Stack & AI Engineer',
        tagline: 'Agentes de voz que validan datos por teléfono',
        summary:
          'Una plataforma de datos de jardines infantiles donde la frescura del dato es una propiedad de primera clase — y quien la mantiene es un agente de IA que llama por teléfono.',
        highlights: [
          'Agente de voz con ElevenLabs y telefonía que llama a los centros, confirma cupos y precios, y escribe el resultado en la base de datos.',
          'Webhook post-llamada con firma HMAC sobre el cuerpo crudo, log idempotente por llamada, reintentos y escalada a un humano.',
          'Despacho por cron con tope diario de llamadas y reaper de 24 horas; todo queda en dry-run si falta cualquier secreto.',
          'Escritor único vía RPC SECURITY DEFINER: ninguna ruta de escritura sin auditar.',
          'En el mapa público: "verificado hace X días" y "cupos libres hoy" como datos de primera línea.'
        ]
      },
      tetherStudio: {
        role: 'Full Stack Engineer',
        tagline: 'Fotografía escolar con edición por IA',
        summary:
          'El estudio produce las fotos, el colegio las etiqueta y edita, y las familias ven y retocan la galería de su hijo. Cada rol con lo suyo y nada más.',
        highlights: [
          'Pivote completo de producto — de "los papás suben fotos" a "el estudio entrega" — sin romper nada de lo ya construido.',
          'Seguridad por fila estricta: el apoderado ve solo las fotos de su pupilo, el director las de su colegio, un anónimo no ve nada. Verificado por API, no de palabra.',
          'Edge function de generación con IA que exige el consentimiento del apoderado antes de dejar que el colegio edite la foto de un menor.',
          'Buckets privados por colegio, URLs firmadas, validación de correo y confirmación de celular por código.'
        ]
      },
      zakumi: {
        role: 'Fundador · Ingeniero principal',
        tagline: 'Estudio AI-first y su centro de control',
        summary:
          'Mi propia empresa: agentes de IA que venden y atienden por WhatsApp, más el panel donde se prospecta, se cobra y se opera todo.',
        highlights: [
          'Agente de WhatsApp con Claude, desplegado y atendiendo negocios reales.',
          'Centro de control con mapa de prospección sobre Google Places y CRM con pipeline y notas automáticas por trigger de base de datos.',
          'Consola de bots: editor de prompts con diff lado a lado y rollback, chat de pruebas, semáforo de salud y apagado de emergencia.',
          'Ficha 360 del cliente con ingreso recurrente, productos contratados y motor de upsell.',
          'Negocio registrado en la Cámara de Comercio de Bogotá. Diseño, marca y landing con GSAP también míos.'
        ]
      },
      medispro: {
        role: 'Freelance — diseño y desarrollo',
        tagline: 'Comercio B2B de insumos médicos',
        summary:
          'Distribuidor de insumos, equipos y mantenimiento biomédico para instituciones de salud en Colombia. Sistema de diseño propio, cero plantillas.',
        highlights: [
          'Sistema editorial propio en CSS a mano: Space Grotesk, DM Sans y JetBrains Mono, sin frameworks de UI.',
          'Hero slider a sangre completa con crossfade, Ken Burns y respeto por prefers-reduced-motion.',
          'Catálogo con cuentas institucionales, carrito y panel privado del cliente.',
          'Dominio, DNS, despliegue en Vercel, Search Console e indexación: entregado funcionando, no entregado en un ZIP.'
        ]
      },
      crowdi: {
        role: 'Frontend Engineer',
        tagline: 'Fraccionamiento inmobiliario',
        summary:
          'Plataforma fintech que digitaliza y fracciona proyectos inmobiliarios en Latinoamérica para abrirlos a nuevos inversionistas.',
        highlights: [
          'Flujos de inversión y onboarding de usuarios, íntegramente remotos.',
          'Firma digital de contratos y gestión de proyectos por desarrollador.',
          'Interfaz en React y TypeScript con Tailwind, pensada para cumplimiento normativo distinto en cada país.'
        ]
      }
    },

    experience: {
      eyebrow: 'Trayectoria',
      title: 'Dónde he estado.',
      present: 'Hoy',
      items: [
        {
          period: '2026 — hoy',
          logo: '/logos/tethered.svg',
          org: 'ConsiliumBots · Tether Education',
          note: 'con la Pontificia Universidad Javeriana',
          role: 'Full Stack & AI Engineer',
          body: 'Plataformas de investigación y producto educativo: el constructor de encuestas Module Flow Engine, la validación de datos por agentes de voz de LUCI y la app de producto de Tether Studio.',
          tags: ['React', 'TypeScript', 'Supabase', 'ElevenLabs', 'PostgreSQL']
        },
        {
          period: '2026 — hoy',
          logo: '/logos/zakumi.webp',
          org: 'Zakumi Estudio',
          note: 'empresa propia',
          role: 'Fundador · Ingeniero principal',
          body: 'Estudio AI-first: agentes de venta y atención por WhatsApp, CRM con IA multi-modelo y el centro de control que lo opera. Del código al cliente que firma.',
          tags: ['Next.js', 'Claude', 'Supabase', 'Google Places']
        },
        {
          period: '2025 — 2026',
          logo: '/logos/nebula.webp',
          org: 'Nebula Medical',
          note: '',
          role: 'Full Stack Developer & Product Manager',
          body: 'Construí Scribe, la plataforma de documentación clínica con IA: multi-LLM con LangChain, voz con Deepgram, interoperabilidad FHIR/HL7 y pagos por gRPC sobre Azure.',
          tags: ['NestJS', 'LangChain', 'Deepgram', 'Azure', 'FHIR']
        },
        {
          period: '2025',
          logo: '/logos/crowdi-mark.webp',
          org: 'Crowdi',
          note: 'fintech',
          role: 'Frontend Engineer',
          body: 'Interfaz de la plataforma de fraccionamiento inmobiliario: flujos de inversión, onboarding y firma digital de contratos.',
          tags: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          period: '2025',
          logo: '/logos/gestocker.svg',
          org: 'Gestocker',
          note: '',
          role: 'Backend Engineer',
          body: 'API en NestJS: autenticación JWT y OAuth2, integración con Stripe, documentación Swagger y modelado con TypeORM.',
          tags: ['NestJS', 'Stripe', 'JWT/OAuth2', 'Swagger']
        },
        {
          period: '2025',
          logo: '/logos/henry-mark.svg',
          org: 'Soy Henry',
          note: 'bootcamp',
          role: 'Teacher Assistant',
          body: 'Acompañé a estudiantes en el stack MERN: revisión de código, depuración en vivo y mentoría de proyectos finales.',
          tags: ['MERN', 'Mentoría', 'Code review']
        },
        {
          period: '2023 — 2024',
          logo: '/logos/mindmarks.svg',
          org: 'MindMarks',
          note: 'para Davivienda',
          role: 'Frontend Developer',
          body: 'Blog financiero para Davivienda: interfaz, rendimiento y publicación de contenido.',
          tags: ['React', 'JavaScript', 'CSS']
        },
        {
          period: '2022 — 2024',
          logo: null,
          org: 'Freelance',
          note: '',
          role: 'Desarrollo web a medida',
          body: 'Sitios y herramientas para negocios pequeños en Bogotá: DentalVets, un gestor de citas para joyería y portafolios profesionales. Aquí aprendí a cobrar, a estimar y a entregar.',
          tags: ['React', 'Node.js', 'PostgreSQL']
        }
      ],
      educationLabel: 'Formación',
      education: [
        { org: 'Soy Henry', detail: 'Bootcamp Full Stack MERN · 800+ horas' },
        { org: 'Dev.F', detail: 'Desarrollo web' },
        { org: 'Inglés', detail: 'Nivel C1' }
      ]
    },

    stack: {
      eyebrow: 'Herramientas',
      title: 'Con qué construyo.'
    },

    other: {
      eyebrow: 'Además',
      title: 'Otros trabajos.',
      subtitle: 'Proyectos anteriores, en su mayoría freelance. Cortos de contar, útiles de mostrar.',
      items: [
        { name: 'DentalVets', detail: 'Landing para servicio veterinario odontológico', href: 'https://dentalvets.com.co/', year: '2025' },
        { name: 'Gestocker', detail: 'Gestión de inventario y ventas', href: 'https://ge-stocker.vercel.app/', year: '2025' },
        { name: 'Portafolio de economista', detail: 'Sitio profesional en Next.js', href: 'https://www.isabelamunevar.com/', year: '2025' },
        { name: 'Joyería Lina Escalante', detail: 'Gestor de citas con Node y PostgreSQL', href: 'https://lina-escalante-design.netlify.app/', year: '2025' },
        { name: 'MindMarks · Davivienda', detail: 'Blog financiero corporativo', href: null, year: '2024' }
      ]
    },

    contact: {
      eyebrow: 'Contacto',
      title: 'Estoy abierto a lo siguiente.',
      body: 'Roles senior de full stack o ingeniería de IA, remotos o híbridos desde Bogotá. También tomo consultorías cortas cuando el problema es interesante. Escríbeme y respondo el mismo día.',
      email: 'Escríbeme',
      cv: 'Descargar CV',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },

    footer: {
      tagline: 'Full Stack & AI Engineer · Bogotá, Colombia',
      rights: 'Todos los derechos reservados.',
      built: 'Hecho con React, GSAP y React Bits.'
    }
  },

  /* ---------------------------------------------------------------- */

  en: {
    meta: {
      title: 'Tomás Munévar — Full Stack & AI Engineer',
      description:
        'Software engineer with 4+ years shipping AI platforms to production. TypeScript, LLMs, voice agents and the infrastructure that keeps them up. Currently working with Pontificia Universidad Javeriana, ConsiliumBots and Tether Studio from Bogotá.'
    },

    nav: {
      work: 'Work',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
      cv: 'CV',
      langLabel: 'change language'
    },

    hero: {
      eyebrow: 'Full Stack · AI · Product',
      titleA: 'I build AI platforms that ',
      titleAccent: 'actually ship.',
      titleB: '',
      roles: ['Full Stack Engineer', 'AI / LLM Engineer', 'Product Engineer'],
      lede: '+4 years building product end to end: TypeScript, AI agents that do real work, and the infrastructure that keeps them standing. Today I work with Pontificia Universidad Javeriana, ConsiliumBots and Tether Studio on platforms used by governments, schools and clinics.',
      ctaWork: 'See the work',
      ctaTalk: "Let's talk",
      available: 'Open to senior roles · remote',
      scroll: 'Scroll'
    },

    metrics: [
      { text: '+4 years', label: 'building product end to end' },
      { value: 12, suffix: '', label: 'Products in production' },
      { value: 5, suffix: '', label: 'Industries: health, education, fintech, retail, media' },
      { value: 3, suffix: '', label: 'Countries: Colombia, Chile, Spain' }
    ],

    trust: { label: 'Built with' },

    about: {
      eyebrow: 'About',
      title: 'My job is to make things exist.',
      reveal:
        'An agent that calls people on the phone and updates a database. A system that turns a doctor visit into a clinical note. A survey engine behind a Yale research study with Universidad Javeriana. I write the code, and I also decide what needs building: I pick the technology after I understand the problem, never before.',
      body: [
        'I am a full stack engineer specialised in TypeScript and in taking language models to real production: with spend caps, traces, prompt versioning, row-level permissions and a plan for when the provider goes down.',
        'I have worked in digital health (FHIR/HL7, clinical transcription), in education research with universities and public institutions, in fintech, and in my own company. Every time the job was the same: understand the business, decide the architecture, write it, keep it alive.',
        'I write things down, document them and leave the work ready for someone else to pick up. Native Spanish, C1 English.'
      ],
      nowLabel: 'Right now',
      now: [
        'Voice agents that call childcare centres and update their records, on LUCI.',
        'The Zakumi control centre: prospecting, billing and bots in one panel.',
        'Conditional surveys for education research, in use across three countries.'
      ],
      factsLabel: 'Facts',
      facts: [
        ['Based in', 'Bogotá, Colombia · remote'],
        ['Languages', 'Spanish native · English C1'],
        ['Focus', 'Applied AI, product and platform'],
        ['Available for', 'Senior full stack / AI roles']
      ]
    },

    capabilities: {
      eyebrow: 'What I do',
      title: 'Four things, done properly.',
      items: [
        {
          title: 'AI systems in production',
          body: 'Agents that do real work, not demos. Multi-model orchestration (Anthropic, OpenAI, Gemini) with LangChain and LangSmith, voice with Deepgram and ElevenLabs, prompt versioning with diff and rollback, dry-run when a secret is missing, and daily spend caps.',
          tags: ['LangChain', 'Anthropic', 'OpenAI', 'Gemini', 'Deepgram', 'ElevenLabs', 'RAG', 'Evals']
        },
        {
          title: 'End-to-end product engineering',
          body: 'From the client conversation to the deploy. Next.js, React 19, NestJS, TanStack, Supabase and PostgreSQL. Data modelling, row-level security, edge functions, end-to-end tests and CI that runs itself.',
          tags: ['Next.js', 'React', 'NestJS', 'TanStack', 'Supabase', 'PostgreSQL', 'Prisma', 'Zod']
        },
        {
          title: 'Platform and infrastructure',
          body: 'Azure, AWS, Google Cloud, Vercel, Firebase, Docker and Terraform. HMAC-signed webhooks, capped queues and crons, idempotent writes, observability, and deploys that do not wake anyone up at 3am.',
          tags: ['Azure', 'AWS', 'GCP', 'Docker', 'Terraform', 'Vercel', 'CI/CD']
        },
        {
          title: 'Product judgment and leadership',
          body: 'Specs, ADRs and issues ready for someone else to pick up. I have led full product pivots alongside founders and researchers, and been the bridge between the engineering team and whoever signs the cheque.',
          tags: ['PRDs', 'ADRs', 'Discovery', 'Mentoring', 'Client-facing']
        }
      ]
    },

    work: {
      eyebrow: 'Selected work',
      title: 'Seven worth talking about.',
      subtitle: 'Real platforms with real users. Some are proprietary — I tell what I can tell.',
      viewCase: 'Read the case',
      visit: 'Visit site',
      repo: 'Repository',
      close: 'Close',
      confidential: 'Proprietary code · product shown, repository not',
      role: 'My role',
      highlights: 'What I built',
      builtWith: 'Built with'
    },

    projects: {
      nebula: {
        role: 'Full Stack Developer & Product Manager',
        tagline: 'AI clinical documentation',
        summary:
          'A platform that turns the doctor-patient conversation into a structured clinical note in real time, and writes it into the health record system the hospital already uses.',
        highlights: [
          'Multi-model orchestration with LangChain and LangSmith (Anthropic, OpenAI, Gemini) with provider failover.',
          'Live voice transcription with Deepgram plus a post-processing pipeline tuned for clinical language.',
          'FHIR and HL7 interoperability to write into existing EHR systems.',
          'gRPC payment gateway and background jobs with Trigger.dev on Azure.',
          'Product goal: up to 70% less time spent writing notes, and less physician burnout.'
        ]
      },
      moduleFlow: {
        role: 'Full Stack Engineer — ConsiliumBots · Tether Education',
        tagline: 'Visual survey and flow builder',
        summary:
          'A drag-and-drop editor where a researcher assembles complex instruments without writing a line of code, publishes them and hands out personalised links.',
        highlights: [
          'Flow engine with conditional routers, repetition and Handlebars variable piping.',
          'A 42-module conditional instrument in production for a Yale research study run together with Pontificia Universidad Javeriana.',
          'One short personalised link per family generated from CSV, with context embedded in the share instead of travelling in the URL.',
          'Interactive maps, labelled slider matrices, and a 30-step end-to-end validation run in production.',
          'Continuous deploy to Firebase Hosting with ephemeral per-PR previews.'
        ]
      },
      luci: {
        role: 'Full Stack & AI Engineer',
        tagline: 'Voice agents that validate data by phone',
        summary:
          'A childcare data platform where data freshness is a first-class property — and the thing that maintains it is an AI agent that picks up the phone.',
        highlights: [
          'Voice agent with ElevenLabs and telephony that calls centres, confirms availability and prices, and writes the result into the database.',
          'Post-call webhook with HMAC signature over the raw body, idempotent per-call logging, retries and escalation to a human.',
          'Cron dispatch with a daily call cap and a 24h reaper; everything falls back to dry-run if any secret is missing.',
          'Single writer through a SECURITY DEFINER RPC: no unaudited write path.',
          'On the public map: "verified X days ago" and "spots free today" as front-line data.'
        ]
      },
      tetherStudio: {
        role: 'Full Stack Engineer',
        tagline: 'School photography with AI editing',
        summary:
          'The studio produces the photos, the school tags and edits them, and families view and retouch their child gallery. Each role gets exactly what it should, and nothing more.',
        highlights: [
          'A full product pivot — from "parents upload photos" to "the studio delivers" — without breaking anything already built.',
          'Strict row-level security: a guardian sees only their child photos, a principal sees their school, an anonymous visitor sees nothing. Verified by API, not by claim.',
          'An AI generation edge function that requires the guardian consent before letting a school edit a minor photo.',
          'Private per-school buckets, signed URLs, email validation and phone confirmation by code.'
        ]
      },
      zakumi: {
        role: 'Founder · Principal engineer',
        tagline: 'AI-first studio and its control centre',
        summary:
          'My own company: AI agents that sell and support over WhatsApp, plus the admin panel where prospecting, billing and operations happen.',
        highlights: [
          'WhatsApp agent powered by Claude, deployed and handling real businesses.',
          'Control centre with a Google Places prospecting map and a CRM whose pipeline writes automatic notes via database triggers.',
          'Bot console: prompt editor with side-by-side diff and rollback, test chat, health indicator and emergency shutdown.',
          'Customer 360 view with recurring revenue, contracted products and an upsell engine.',
          'Registered business in Bogotá. Brand, design and GSAP landing are mine too.'
        ]
      },
      medispro: {
        role: 'Freelance — design and development',
        tagline: 'B2B medical supplies commerce',
        summary:
          'Distributor of medical supplies, equipment and biomedical maintenance for Colombian health institutions. Custom design system, zero templates.',
        highlights: [
          'Hand-written editorial CSS system: Space Grotesk, DM Sans and JetBrains Mono, no UI framework.',
          'Full-bleed hero slider with crossfade, Ken Burns and prefers-reduced-motion respected.',
          'Catalogue with institutional accounts, cart and a private client dashboard.',
          'Domain, DNS, Vercel deploy, Search Console and indexing: delivered running, not delivered as a ZIP.'
        ]
      },
      crowdi: {
        role: 'Frontend Engineer',
        tagline: 'Real estate fractionalisation',
        summary:
          'A fintech platform that digitises and fractionalises real estate projects across Latin America to open them to new investors.',
        highlights: [
          'Investment and onboarding flows, fully remote.',
          'Digital contract signing and per-developer project management.',
          'React and TypeScript interface with Tailwind, designed around per-country regulatory differences.'
        ]
      }
    },

    experience: {
      eyebrow: 'Experience',
      title: 'Where I have been.',
      present: 'Now',
      items: [
        {
          period: '2026 — now',
          logo: '/logos/tethered.svg',
          org: 'ConsiliumBots · Tether Education',
          note: 'with Pontificia Universidad Javeriana',
          role: 'Full Stack & AI Engineer',
          body: 'Research and education product platforms: the Module Flow Engine survey builder, LUCI voice-agent data validation, and the Tether Studio product app.',
          tags: ['React', 'TypeScript', 'Supabase', 'ElevenLabs', 'PostgreSQL']
        },
        {
          period: '2026 — now',
          logo: '/logos/zakumi.webp',
          org: 'Zakumi Estudio',
          note: 'my own company',
          role: 'Founder · Principal engineer',
          body: 'AI-first studio: WhatsApp sales and support agents, a multi-model AI CRM, and the control centre that runs it. From the code to the client who signs.',
          tags: ['Next.js', 'Claude', 'Supabase', 'Google Places']
        },
        {
          period: '2025 — 2026',
          logo: '/logos/nebula.webp',
          org: 'Nebula Medical',
          note: '',
          role: 'Full Stack Developer & Product Manager',
          body: 'Built Scribe, the AI clinical documentation platform: multi-LLM with LangChain, voice with Deepgram, FHIR/HL7 interoperability and gRPC payments on Azure.',
          tags: ['NestJS', 'LangChain', 'Deepgram', 'Azure', 'FHIR']
        },
        {
          period: '2025',
          logo: '/logos/crowdi-mark.webp',
          org: 'Crowdi',
          note: 'fintech',
          role: 'Frontend Engineer',
          body: 'Interface for the real estate fractionalisation platform: investment flows, onboarding and digital contract signing.',
          tags: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          period: '2025',
          logo: '/logos/gestocker.svg',
          org: 'Gestocker',
          note: '',
          role: 'Backend Engineer',
          body: 'NestJS API: JWT and OAuth2 authentication, Stripe integration, Swagger documentation and TypeORM modelling.',
          tags: ['NestJS', 'Stripe', 'JWT/OAuth2', 'Swagger']
        },
        {
          period: '2025',
          logo: '/logos/henry-mark.svg',
          org: 'Soy Henry',
          note: 'bootcamp',
          role: 'Teacher Assistant',
          body: 'Supported students across the MERN stack: code review, live debugging and final-project mentoring.',
          tags: ['MERN', 'Mentoring', 'Code review']
        },
        {
          period: '2023 — 2024',
          logo: '/logos/mindmarks.svg',
          org: 'MindMarks',
          note: 'for Davivienda',
          role: 'Frontend Developer',
          body: 'Financial blog for Davivienda: interface, performance and content publishing.',
          tags: ['React', 'JavaScript', 'CSS']
        },
        {
          period: '2022 — 2024',
          logo: null,
          org: 'Freelance',
          note: '',
          role: 'Custom web development',
          body: 'Sites and tools for small businesses in Bogotá: DentalVets, an appointment manager for a jewellery shop, and professional portfolios. This is where I learned to quote, to estimate and to deliver.',
          tags: ['React', 'Node.js', 'PostgreSQL']
        }
      ],
      educationLabel: 'Education',
      education: [
        { org: 'Soy Henry', detail: 'Full Stack MERN bootcamp · 800+ hours' },
        { org: 'Dev.F', detail: 'Web development' },
        { org: 'English', detail: 'C1 level' }
      ]
    },

    stack: {
      eyebrow: 'Tooling',
      title: 'What I build with.'
    },

    other: {
      eyebrow: 'Also',
      title: 'Other work.',
      subtitle: 'Earlier projects, mostly freelance. Short to tell, useful to show.',
      items: [
        { name: 'DentalVets', detail: 'Landing page for a veterinary dental service', href: 'https://dentalvets.com.co/', year: '2025' },
        { name: 'Gestocker', detail: 'Inventory and sales management', href: 'https://ge-stocker.vercel.app/', year: '2025' },
        { name: 'Economist portfolio', detail: 'Professional site in Next.js', href: 'https://www.isabelamunevar.com/', year: '2025' },
        { name: 'Lina Escalante Jewellery', detail: 'Appointment manager with Node and PostgreSQL', href: 'https://lina-escalante-design.netlify.app/', year: '2025' },
        { name: 'MindMarks · Davivienda', detail: 'Corporate financial blog', href: null, year: '2024' }
      ]
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Here is what I am open to.',
      body: 'Senior full stack or AI engineering roles, remote or hybrid from Bogotá. I also take short consulting engagements when the problem is interesting. Write to me and I answer the same day.',
      email: 'Email me',
      cv: 'Download CV',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },

    footer: {
      tagline: 'Full Stack & AI Engineer · Bogotá, Colombia',
      rights: 'All rights reserved.',
      built: 'Built with React, GSAP and React Bits.'
    }
  }
};
