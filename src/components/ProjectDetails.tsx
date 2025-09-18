// src/components/ProjectDetails.tsx
"use client";
import { motion } from "framer-motion";
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
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 rounded-sm bg-midnight p-2 hover:bg-gray-500"
          aria-label="Close"
        >
          <img src="/assets/close.svg" className="h-6 w-6" alt="" />
        </button>

        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 id="project-title" className="mb-2 text-2xl font-bold text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, i) => (
            <p key={i} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="size-10 rounded-lg hover-animation"
                />
              ))}
            </div>

            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-1 font-medium hover-animation"
              >
                View Project
                <img src="/assets/arrow-up.svg" className="size-4" alt="" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-white">
                View Project
                <img
                  src="/assets/arrow-up.svg"
                  className="size-4"
                  alt=""
                />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
