export type Tag = { id: number; name: string; path: string };
export type Project = {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: Tag[];
  slug?: string;
};
export type Social = { name: string; href: string; icon: string };
export type Experience = {
  title: string;
  job: string;
  date: string;
  contents: string[];
};
export type Review = {
  name: string;
  username: string;
  body: string;
  img: string;
};

export const myProjects: Project[] = [
  {
    id: 1,
    title: "Plataforma E-commerce",
    description:
      "Desarrollé una plataforma e-commerce de alto rendimiento con un enfoque en velocidad, escalabilidad y experiencia de usuario fluida.",
    subDescription: [
      "Construí el backend utilizando Laravel 11 con Laravel Octane para optimizar la concurrencia y el rendimiento del servidor.",
      "Implementé el frontend en Next.js 15, logrando una interfaz moderna, rápida y responsiva.",
      "Desplegué todo el sistema en contenedores Docker con Nginx como servidor web, asegurando portabilidad y escalabilidad.",
      "Integré el sistema de pagos mediante la API Checkout de Mercado Pago, garantizando transacciones seguras y confiables.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/darkshop.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "Redis", path: "/assets/logos/redis.svg" },
      { id: 6, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 2,
    title: "Red Social con Chat en Tiempo Real",
    description:
      "Desarrollé una red social interactiva con funcionalidades completas y comunicación en tiempo real entre usuarios.",
    subDescription: [
      "Implementé un sistema de publicaciones con likes, comentarios, guardados y seguimiento de usuarios.",
      "Diseñé comunidades donde los usuarios pueden compartir contenido y participar en conversaciones.",
      "Integré la API de GetStream para ofrecer chat en tiempo real con mensajería privada y creación de grupos.",
      "Permití el envío de contenido multimedia en los chats, mejorando la experiencia de comunicación.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/red-social.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Sistema Web de Reservación de Citas Médicas",
    description:
      "Desarrollé un sistema integral para la gestión y reserva de citas médicas, optimizando la atención y los procesos administrativos.",
    subDescription: [
      "Permite a los pacientes reservar citas médicas en línea o presenciales de forma rápida y segura.",
      "Facilita al personal médico y administrativo la gestión eficiente de horarios, pacientes y disponibilidad.",
      "Implementé un sistema de recomendación basado en inteligencia artificial que sugiere médicos según el problema del paciente.",
      "Mejoré la experiencia del usuario mediante una interfaz intuitiva y flujos automatizados que reducen tiempos de atención.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/appointments.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 4,
    title: "Sistema de Reconocimiento Facial de Emociones",
    description:
      "Desarrollé un sistema basado en visión por computadora para el reconocimiento de emociones en niños con habilidades especiales, promoviendo la comprensión y gestión emocional.",
    subDescription: [
      "Utilicé algoritmos de visión por computadora y aprendizaje automático para detectar y reconocer expresiones faciales en tiempo real.",
      "Proporcioné retroalimentación visual e interactiva para ayudar a los niños a identificar y comprender sus emociones.",
      "Optimicé el sistema para funcionar de manera precisa incluso en entornos con iluminación variable.",
      "Contribuí al desarrollo de herramientas tecnológicas inclusivas enfocadas en el aprendizaje emocional asistido.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/pevico.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
    title: "Cyberpunk Hacker Game – Gemini",
    description:
      "Desarrollé un juego interactivo basado en inteligencia artificial que genera historias, escenas y decisiones en un entorno cyberpunk-apocalíptico.",
    subDescription: [
      "Implementé el frontend del juego utilizando tecnologías modernas para ofrecer una experiencia inmersiva e intuitiva.",
      "Integré Gemini para generar dinámicamente la historia, diálogos e imágenes según las decisiones del jugador.",
      "El juego inicia automáticamente con una escena del apocalipsis zombi y evoluciona en función de las acciones del usuario.",
      "Cada decisión afecta la narrativa, los eventos y las posibilidades de supervivencia dentro del mundo generado.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Gemini API", path: "/assets/logos/gemini.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "Sitio Web Profesional para Agencia de Software",
    description:
      "Diseñé y desarrollé un sitio web corporativo en WordPress optimizado para rendimiento, posicionamiento SEO y experiencia de usuario.",
    subDescription: [
      "Construí un sitio totalmente administrable en WordPress, adaptado a las necesidades de una agencia de software.",
      "Optimicé el rendimiento y las métricas de PageSpeed, alcanzando puntuaciones sobresalientes en velocidad y usabilidad.",
      "Implementé buenas prácticas de SEO técnico y estructural para mejorar la visibilidad en motores de búsqueda.",
      "Apliqué un diseño profesional, moderno y responsive, garantizando una excelente experiencia en cualquier dispositivo.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/codemitsu.png",
    tags: [
      { id: 1, name: "Worpdpress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const mySocials: Social[] = [
  { name: "WhatsApp", href: "", icon: "/assets/socials/whatsApp.svg" },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences: Experience[] = [
  {
    title: "Desarrollador Web",
    job: "T-SOLUCIONA, La Libertad - Perú",
    date: "Abril 2024 — Agosto 2024",
    contents: [
      "Desarrollé e implementé un sistema web integral de gestión de inventarios y valijas para optimizar el control de stock y la documentación entre sedes y proveedores.",
      "Automatizé procesos clave como el seguimiento de inventarios y la gestión documental, reduciendo significativamente errores humanos y tiempos de respuesta.",
      "Logré una mejora del 50% en la eficiencia operativa mediante la digitalización de procesos críticos.",
      "Diseñé la arquitectura del sistema con escalabilidad en mente, permitiendo su adaptación a futuras necesidades de la empresa.",
    ],
  },
  {
    title: "Desarrollador Web",
    job: "INTERIBERICA, Almería - España",
    date: "Agosto 2024 — Septiembre 2025",
    contents: [
      "Desarrollé y optimicé sistemas web existentes, incorporando nuevas funcionalidades y mejorando el rendimiento general.",
      "Trabajé con plataformas de eCommerce como OpenCart y PrestaShop, desarrollando e integrando plugins personalizados.",
      "Desarrollé proyectos en WordPress para sitios corporativos y tiendas online, asegurando escalabilidad y mantenibilidad.",
      "Implementé y consumí APIs REST propias y de terceros, incluyendo integraciones con OpenAI y otros servicios externos para ampliar funcionalidades y automatizar procesos.",
      "Diseñé e implementé interfaces responsivas adaptadas a distintos dispositivos, incrementando la satisfacción del usuario y reduciendo los tiempos de carga en un 40%.",
    ],
  },
  {
    title: "Desarrollador Full Stack Freelance",
    job: "Independiente",
    date: "2025 — Presente",
    contents: [
      "Desarrollo aplicaciones web full stack, trabajando tanto en el frontend como en el backend con tecnologías modernas como React, Next.js, Laravel y Node.js.",
      "He creado un portafolio personal y proyectos escalables que integran APIs externas y bases de datos SQL/NoSQL, fortaleciendo mis habilidades en soluciones de alto rendimiento.",
    ],
  },
];

export const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "Nunca había visto algo así antes. Es increíble. Me encanta.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "No sé qué decir. Me he quedado sin palabras. Es asombroso.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "No tengo palabras. Esto es increíble. Me encanta.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "Sin duda, la mejor experiencia que he tenido. ¡Lo recomiendo totalmente!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "¡Trabajo increíble! La atención al detalle es fenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "Superó todas mis expectativas. ¡Absolutamente impresionante!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simplemente impresionante. La mejor decisión que he tomado en mucho tiempo.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Me alegra mucho haber encontrado esto. Ha cambiado las reglas del juego para mí.",
    img: "https://robohash.org/eve",
  },
];
