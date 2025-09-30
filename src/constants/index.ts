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
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
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
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
