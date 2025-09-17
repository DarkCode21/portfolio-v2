// src/components/ProjectDetails.tsx
"use client";
import type { Tag } from "@/constants";

type Props = {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
};

export default function ProjectDetails({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-midnight p-6">
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <button onClick={closeModal} aria-label="Close">
            <img src="/assets/close.svg" className="h-6 w-6" alt="close" />
          </button>
        </div>
        <p className="subtext mt-2">{description}</p>

        <img src={image} alt={title} className="mt-4 w-full rounded-lg" />

        <ul className="mt-6 list-disc space-y-2 pl-5 text-neutral-300">
          {subDescription.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 text-sand">
          {tags.map((t) => (
            <span
              key={t.id}
              className="rounded-full bg-white/10 px-3 py-1 text-sm"
            >
              {t.name}
            </span>
          ))}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block underline"
          >
            View project
          </a>
        )}
      </div>
    </div>
  );
}
