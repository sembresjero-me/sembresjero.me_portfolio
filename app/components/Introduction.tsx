"use client";

import { useTranslation } from "@/app/i18n/client";

interface IntroductionProps {
  lng: any;
}

const Introduction: React.FC<IntroductionProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "introduction");

  return (
    <>
      <div className="flex justify-center items-center bg-cream rounded-custom w-full min-h-[50svh] p-12 mb-32">
        <h3 className="font-instrument_serif text-5xl 2xl:text-7xl text-center leading-tight">
          {t("start")}{" "}
          <span className="bg-gradient-to-r from-shockingly_green to-lt_green text-transparent bg-clip-text">
            {t("first-highlighted")}
          </span>{" "}
          {t("middle")}{" "}
          <span className="bg-gradient-to-r from-lt_green to-shockingly_green text-transparent bg-clip-text">
            {t("second-highlighted")}
          </span>
          {t("end")}
        </h3>
      </div>
    </>
  );
};

export default Introduction;
