"use client";

import { useId } from "react";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants";

export default function Experiences() {
  const sectionId = useId();

  return (
    <section
      id={`${sectionId}-experiences`}
      data-section="experiences"
      className="w-full c-space section-spacing"
      aria-label="Work experience section"
    >
      <h2 className="text-heading">My Work Experience</h2>
      <Timeline data={experiences} />
    </section>
  );
}
