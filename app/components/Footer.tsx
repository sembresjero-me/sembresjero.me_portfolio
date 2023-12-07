'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

interface FooterProps {
  lng: any;
  counter: () => void;
}

const Footer: React.FC<FooterProps> = ({ lng, counter }) => {
  const { t } = useTranslation(lng, 'footer');
  const [englishUrl, setEnglishUrl] = useState<string>('');
  const [frenchUrl, setFrenchUrl] = useState<string>('');
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.lng === 'en') {
      setEnglishUrl(pathname);
      const currentUrlInFrench = pathname.replace(/en/i, 'fr');
      setFrenchUrl(currentUrlInFrench);
    } else {
      setFrenchUrl(pathname);
      const currentUrlInEnglish = pathname.replace(/fr/i, 'en');
      setEnglishUrl(currentUrlInEnglish);
    }
  }, [pathname]);

  return (
    <>
      <footer className="fixed bottom-0 z-50 h-[70px] w-full">
        <nav className="h-full w-full px-8 py-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-12">
              <a
                onClick={() => {
                  if (pathname.includes('/legal-notice')) {
                    counter();
                    setTimeout(() => {
                      router.push('#');
                    }, 500);
                  } else {
                    counter();
                    setTimeout(() => {
                      router.push(`/${lng}/legal-notice`);
                    }, 500);
                  }
                }}
              >
                {pathname.includes('/legal-notice')
                  ? t('footer-menu-legal-notice-item-active')
                  : t('footer-menu-legal-notice-item')}
              </a>
              <a
                onClick={() => {
                  if (pathname.includes('/privacy-policy')) {
                    counter();
                    setTimeout(() => {
                      router.push('#');
                    }, 500);
                  } else {
                    counter();
                    setTimeout(() => {
                      router.push(`/${lng}/privacy-policy`);
                    }, 500);
                  }
                }}
              >
                {pathname.includes('/privacy-policy')
                  ? t('footer-menu-privacy-policy-item-active')
                  : t('footer-menu-privacy-policy-item')}
              </a>
              <a
                onClick={() => {
                  if (pathname.includes('/en')) {
                    counter();
                    setTimeout(() => {
                      router.push(frenchUrl);
                    }, 500);
                  } else {
                    counter();
                    setTimeout(() => {
                      router.push(englishUrl);
                    }, 500);
                  }
                }}
              >
                {pathname.includes('/en')
                  ? t('footer-menu-language-switcher-english-item-active')
                  : t('footer-menu-language-switcher-english-item')}{' '}
                /{' '}
                {pathname.includes('/fr')
                  ? t('footer-menu-language-switcher-french-item-active')
                  : t('footer-menu-language-switcher-french-item')}
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
