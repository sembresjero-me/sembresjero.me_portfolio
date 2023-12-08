'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface LegalNoticeProps {
  lng: any;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'legal-notice');
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsShowed(true), 500);
  }, [isShowed]);

  return (
    <>
      <div className="my-24 w-full rounded-lg border border-secondary bg-card p-12 shadow-custom shadow-primary xl:my-0">
        <h2 className="mb-8 w-full text-3xl">{t('legal-notice-page-title')}</h2>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-owner-title')}</h3>
          <h4>{t('legal-notice-owner-name')}</h4>
          <p>{t('legal-notice-owner-address')}</p>
          <p>{t('legal-notice-owner-number')}</p>
          <p>{t('legal-notice-owner-code')}</p>
          <p>{t('legal-notice-owner-contact')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-hoster-title')}</h3>
          <h4>{t('legal-notice-hoster-name')}</h4>
          <p>{t('legal-notice-hoster-address')}</p>
          <p>{t('legal-notice-hoster-contact')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-website-usage-title')}</h3>
          <p className="whitespace-pre-line">{t('legal-notice-website-usage-description')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-responsibilities-title')}</h3>
          <p className="whitespace-pre-line">{t('legal-notice-responsibilities-description')}</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-copyrights-title')}</h3>
          <p className="whitespace-pre-line">{t('legal-notice-copyrights-description')}</p>
        </div>
        <div>
          <h3 className="mb-2 w-full text-2xl">{t('legal-notice-complaints-title')}</h3>
          <p className="whitespace-pre-line">{t('legal-notice-complaints-description')}</p>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
