"use client";

import { useTranslations } from "next-intl";
import CountUp from "react-countup";

const stats = [
  { id: "exp", number: 3 },
  { id: "projects", number: 20 },
  { id: "tech", number: 20 },
  { id: "commits", number: 850 },
];

const Stats = () => {
  const t = useTranslations("Stats");

  return (
    <div className="max-w-6xl mx-auto pb-5">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item) => (
          <div
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key={item.id}
          >
            <CountUp
              end={item.number}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${
                t(item.id).length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {t(item.id)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
