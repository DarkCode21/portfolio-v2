"use client";

import { useTranslations } from "next-intl";
import { useId } from "react";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants";

export default function Experiences() {
  const sectionId = useId();
  const t = useTranslations("Experiences");

  return (
    <section
      id={`${sectionId}-experiences`}
      data-section="experiences"
      className="w-full c-space section-spacing"
      aria-label={t("aria_label")}
    >
      <h2 className="text-heading">{t("title")}</h2>
      <Timeline data={experiences} />
    </section>
  );
}
