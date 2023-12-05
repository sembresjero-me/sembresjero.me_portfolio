"use client";

import { useTranslation } from "@/app/i18n/client";

interface LegalNoticeProps {
  lng: any;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "legal-notice");

  return (
    <>
      <div className="bg-card p-12 rounded-lg border border-secondary shadow-custom shadow-primary w-full my-32">
        <h2 className="w-full text-xl 2xl:text-3xl">
          {t("legal-notice-page-title")}
        </h2>
        <div className="mb-8">
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-owner-title")}
          </h3>
          <h4>{t("legal-notice-owner-name")}</h4>
          <p>{t("legal-notice-owner-address")}</p>
          <p>{t("legal-notice-owner-number")}</p>
          <p>{t("legal-notice-owner-code")}</p>
          <p>{t("legal-notice-owner-contact")}</p>
        </div>
        <div className="mb-8">
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-hoster-title")}
          </h3>
          <h4>{t("legal-notice-hoster-name")}</h4>
          <p>{t("legal-notice-hoster-address")}</p>
          <p>{t("legal-notice-hoster-contact")}</p>
        </div>
        <div className="mb-8">
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-website-usage-title")}
          </h3>
          <p className="whitespace-pre-line">
            {t("legal-notice-website-usage-description")}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-responsibilities-title")}
          </h3>
          <p className="whitespace-pre-line">
            {t("legal-notice-responsibilities-description")}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-copyrights-title")}
          </h3>
          <p className="whitespace-pre-line">
            {t("legal-notice-copyrights-description")}
          </p>
        </div>
        <div>
          <h3 className="w-full text-xl 2xl:text-2xl mb-2">
            {t("legal-notice-complaints-title")}
          </h3>
          <p className="whitespace-pre-line">
            {t("legal-notice-complaints-description")}
          </p>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
