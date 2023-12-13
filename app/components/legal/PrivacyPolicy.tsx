'use client';

import { useTranslation } from '@/app/i18n';

interface PrivacyPolicyProps {
  lng: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'privacy-policy');

  return (
    <>
      <div className="mb-8 mt-24 w-full rounded-lg border border-secondary bg-card p-12 shadow-custom shadow-primary xl:mb-0 xl:mt-0">
        <div className="mb-8">
          <h2 className="text-3xl">{t('privacy-policy-page-title')}</h2>
          <p className="whitespace-pre-line">{t('privacy-policy-page-intro')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-interpretation-definitions-title')}
          </h3>
          <div className="mb-4">
            <h4>{t('privacy-policy-interpretation-title')}</h4>
            <p>{t('privacy-policy-interpretation-description')}</p>
          </div>
          <div>
            <h4>{t('privacy-policy-definitions-title')}</h4>
            <p>{t('privacy-policy-definitions-description')}</p>
            <ul className="mt-2 list-inside list-disc indent-4">
              <li>{t('privacy-policy-definitions-account')}</li>
              <li>{t('privacy-policy-definitions-affiliate')}</li>
              <li>{t('privacy-policy-definitions-company')}</li>
              <li>{t('privacy-policy-definitions-cookies')}</li>
              <li>{t('privacy-policy-definitions-country')}</li>
              <li>{t('privacy-policy-definitions-device')}</li>
              <li>{t('privacy-policy-definitions-personal-data')}</li>
              <li>{t('privacy-policy-definitions-service')}</li>
              <li>{t('privacy-policy-definitions-service-provider')}</li>
              <li>{t('privacy-policy-definitions-usage-data')}</li>
              <li>{t('privacy-policy-definitions-website')}</li>
              <li>{t('privacy-policy-definitions-you')}</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-collecting-using-data-title')}
          </h3>
          <div className="mb-4">
            <h4>{t('privacy-policy-personal-data-title')}</h4>
            <p className="whitespace-pre-line">{t('privacy-policy-personal-data-description')}</p>
            <ul className="mt-2 list-inside list-disc indent-4">
              <li>{t('privacy-policy-personal-data-first-bullet-point')}</li>
              <li>{t('privacy-policy-personal-data-second-bullet-point')}</li>
            </ul>
          </div>
          <div>
            <h4>{t('privacy-policy-usage-data-title')}</h4>
            <p className="whitespace-pre-line">{t('privacy-policy-usage-data-description')}</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('privacy-policy-cookies-title')}</h3>
          <p className="whitespace-pre-line">{t('privacy-policy-cookies-first-description')}</p>
          <ul className="my-2 list-inside list-disc indent-4">
            <li>{t('privacy-policy-cookies-first-bullet-point')}</li>
            <li>{t('privacy-policy-cookies-second-bullet-point')}</li>
          </ul>
          <p className="whitespace-pre-line">{t('privacy-policy-cookies-second-description')}</p>
          <ul className="my-2 list-inside list-disc indent-4">
            <li className="mb-4">
              <h4 className="mb-4 inline">
                {t('privacy-policy-cookies-necessary-essentials-title')}
              </h4>
              <p className="my-2 indent-12">
                {t('privacy-policy-cookies-necessary-essentials-type')}
              </p>
              <p className="mb-2 indent-12">
                {t('privacy-policy-cookies-necessary-essentials-administrator')}
              </p>
              <p className="indent-12">
                {t('privacy-policy-cookies-necessary-essentials-purpose')}
              </p>
            </li>
            <li className="mb-4">
              <h4 className="mb-4 inline">{t('privacy-policy-cookies-acceptance-title')}</h4>
              <p className="my-2 indent-12">{t('privacy-policy-cookies-acceptance-type')}</p>
              <p className="mb-2 indent-12">
                {t('privacy-policy-cookies-acceptance-administrator')}
              </p>
              <p className="indent-12">{t('privacy-policy-cookies-acceptance-purpose')}</p>
            </li>
            <li>
              <h4 className="mb-4 inline">{t('privacy-policy-cookies-functionality-title')}</h4>
              <p className="my-2 indent-12">{t('privacy-policy-cookies-functionality-type')}</p>
              <p className="mb-2 indent-12">
                {t('privacy-policy-cookies-functionality-administrator')}
              </p>
              <p className="indent-12">{t('privacy-policy-cookies-functionality-purpose')}</p>
            </li>
          </ul>
          <p className="whitespace-pre-line">{t('privacy-policy-cookies-third-description')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('privacy-policy-use-of-your-data-title')}</h3>
          <p className="whitespace-pre-line">
            {t('privacy-policy-use-of-your-data-first-description')}
          </p>
          <ul className="my-2 list-inside list-disc indent-4">
            <li>{t('privacy-policy-use-of-your-data-first-description-first-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-second-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-third-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-fourth-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-fifth-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-sixth-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-seventh-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-eight-bullet-point')}</li>
          </ul>
          <p className="whitespace-pre-line">
            {t('privacy-policy-use-of-your-data-second-description')}
          </p>
          <ul className="mt-4 list-inside list-disc indent-4">
            <li>{t('privacy-policy-use-of-your-data-second-description-first-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-second-description-second-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-second-description-third-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-second-description-fourth-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-first-description-fifth-bullet-point')}</li>
            <li>{t('privacy-policy-use-of-your-data-second-description-sixth-bullet-point')}</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-retention-of-your-data-title')}
          </h3>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-retention-of-your-data-first-description')}
          </p>
          <p className="whitespace-pre-line">
            {t('privacy-policy-retention-of-your-data-second-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-transfer-of-your-data-title')}
          </h3>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-transfer-of-your-data-first-description')}
          </p>
          <p className="whitespace-pre-linel mb-2">
            {t('privacy-policy-transfer-of-your-data-second-description')}
          </p>
          <p className="whitespace-pre-line">
            {t('privacy-policy-transfer-of-your-data-third-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('privacy-policy-delete-your-data-title')}</h3>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-delete-your-data-first-description')}
          </p>
          <p className="whitespace-pre-linel mb-2">
            {t('privacy-policy-delete-your-data-second-description')}
          </p>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-delete-your-data-third-description')}
          </p>
          <p className="whitespace-pre-line">
            {t('privacy-policy-delete-your-data-fourth-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-disclosure-of-your-data-title')}
          </h3>
          <div className="mb-4">
            <h4>{t('privacy-policy-disclosure-of-your-data-business-transactions-title')}</h4>
            <p>{t('privacy-policy-disclosure-of-your-data-business-transactions-description')}</p>
          </div>
          <div className="mb-4">
            <h4>{t('privacy-policy-disclosure-of-your-data-law-enforcement-title')}</h4>
            <p>{t('privacy-policy-disclosure-of-your-data-law-enforcement-description')}</p>
          </div>
          <h4>{t('privacy-policy-disclosure-of-your-data-other-legal-requirements-title')}</h4>
          <p>{t('privacy-policy-disclosure-of-your-data-other-legal-requirements-description')}</p>
          <ul className="mt-4 list-inside list-disc indent-4">
            <li>
              {t(
                'privacy-policy-disclosure-of-your-data-other-legal-requirements-first-bullet-point',
              )}
            </li>
            <li>
              {t(
                'privacy-policy-disclosure-of-your-data-other-legal-requirements-second-bullet-point',
              )}
            </li>
            <li>
              {t(
                'privacy-policy-disclosure-of-your-data-other-legal-requirements-third-bullet-point',
              )}
            </li>
            <li>
              {t(
                'privacy-policy-disclosure-of-your-data-other-legal-requirements-fourth-bullet-point',
              )}
            </li>
            <li>
              {t(
                'privacy-policy-disclosure-of-your-data-other-legal-requirements-fifth-bullet-point',
              )}
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-security-of-your-data-title')}
          </h3>
          <p className="whitespace-pre-line">
            {t('privacy-policy-security-of-your-data-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('privacy-policy-childrens-privacy-title')}</h3>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-childrens-privacy-first-description')}
          </p>
          <p className="whitespace-pre-linel">
            {t('privacy-policy-childrens-privacy-second-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">
            {t('privacy-policy-links-to-others-websites-title')}
          </h3>
          <p className="mb-2 whitespace-pre-line">
            {t('privacy-policy-links-to-others-websites-first-description')}
          </p>
          <p className="whitespace-pre-linel">
            {t('privacy-policy-links-to-others-websites-second-description')}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('privacy-policy-contact-us-title')}</h3>
          <p className="whitespace-pre-line">{t('privacy-policy-contact-us-description')}</p>
          <ul className="my-2 list-inside list-disc indent-4">
            <li>{t('privacy-policy-contact-us-first-bullet-point')}</li>
            <li>{t('privacy-policy-contact-us-second-bullet-point')}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
