// src/components/Project.tsx
"use client";
import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import type { Tag } from "@/constants";

type Props = {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];
  setPreview: (url: string | null) => void;
};

export default function Project({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: Props) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="space-y-14 py-10 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="mt-2 flex gap-5 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="hover-animation flex cursor-pointer items-center gap-1"
        >
          Read More
          <img src="/assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
}
