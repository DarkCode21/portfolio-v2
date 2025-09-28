"use client";

import { useTranslations } from "next-intl";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants";

export default function Experiences() {
  const t = useTranslations("Experiences");

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: ID estable para anclaje (#experiences) y deep-link
    <section
      id="experiences"
      data-section="experiences"
      className="w-full c-space section-spacing scroll-mt-18"
      aria-label={t("aria_label")}
    >
      <h2 className="text-heading">{t("title")}</h2>
      <Timeline data={experiences} />
    </section>
  );
}
