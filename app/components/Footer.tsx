'use client';

import { useEffect, useState } from 'react';
import { usePageTransition } from '@/app/hooks/usePageTransition';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import dayjs from 'dayjs';

interface FooterProps {
  lng: any;
}

const Footer: React.FC<FooterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'footer');
  const [englishUrl, setEnglishUrl] = useState<string>('');
  const [frenchUrl, setFrenchUrl] = useState<string>('');
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const { count, setCount } = usePageTransition();

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
      <footer className="z-50 block w-full xl:fixed xl:bottom-0">
        <Image
          src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-typo-light.svg"
          alt="Jérôme Sembres Portfolio - Typo"
          width={30}
          height={123}
          className="3xl:bottom-5 3xl:left-12 3xl:rotate-0 fixed -bottom-6 left-24 z-[51] hidden rotate-90 xl:block"
        />
        <nav className="h-full w-full px-4 py-4 md:px-8 xl:px-12">
          <div className="grid w-full grid-cols-1 items-center justify-items-stretch gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="block justify-self-start xl:hidden">
              <p className="text-secondary">
                {dayjs().format('YYYY')} {t('footer-menu-copyrights-text')}
              </p>
            </div>
            <div className="3xl:flex-col 3xl:space-y-2 3xl:space-x-0 3xl:items-end flex items-center space-x-12 justify-self-start md:justify-self-end">
              <a
                onClick={() => {
                  if (pathname.includes('/legal-notice')) {
                    router.push('#');
                  } else {
                    setCount(count + 1);
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
                    router.push('#');
                  } else {
                    setCount(count + 1);
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
                    setCount(count + 1);
                    setTimeout(() => {
                      router.push(frenchUrl);
                    }, 500);
                  } else {
                    setCount(count + 1);
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
