"use client";

import { useTranslation } from "@/app/i18n/client";
import Education from "@/app/components/educations/Education";

interface EducationsProps {
  lng: any;
}

const Educations: React.FC<EducationsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "education");

  return (
    <>
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center w-full min-h-[20svh] mb-32">
        <Education
          title={t("master-title")}
          date={t("master-date")}
          location={t("master-location")}
        />
        <Education
          title={t("bachelor-title")}
          date={t("bachelor-date")}
          location={t("bachelor-location")}
        />
        <Education
          title={t("btec-title")}
          date={t("btec-date")}
          location={t("btec-location")}
        />
        <Education
          title={t("gce-title")}
          date={t("gce-date")}
          location={t("gce-location")}
        />
      </div>
    </>
  );
};

export default Educations;
