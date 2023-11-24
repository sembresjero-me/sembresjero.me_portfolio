"use client";

import { useTranslation } from "@/app/i18n/client";
import Certification from "@/app/components/certifications/Certification";

interface CertificationsProps {
  lng: any;
}

const Certifications: React.FC<CertificationsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "certifications");

  return (
    <>
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center w-full min-h-[20svh] mb-32">
        <Certification
          title={t("first-item-title")}
          date={t("first-item-date")}
          location={t("first-item-location")}
        />
        <Certification
          title={t("second-item-title")}
          date={t("second-item-date")}
          location={t("second-item-location")}
        />
      </div>
    </>
  );
};

export default Certifications;
