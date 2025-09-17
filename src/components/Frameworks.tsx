// src/components/Frameworks.tsx
"use client";
import { OrbitingCircles } from "@/components/OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((s, i) => (
          <Icon key={i} src={`/assets/logos/${s}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse>
        {[...skills].reverse().map((s, i) => (
          <Icon key={i} src={`/assets/logos/${s}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

function Icon({ src }: { src: string }) {
  return (
    <img src={src} className="rounded-sm duration-200 hover:scale-110" alt="" />
  );
}
