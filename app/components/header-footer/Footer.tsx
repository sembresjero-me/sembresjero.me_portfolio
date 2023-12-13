'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';
import { ToastAction } from '@/app/components/ui/toast';
import { useToast } from '@/app/components/ui/use-toast';
import Image from 'next/image';
import dayjs from 'dayjs';
import MenuItem from '@/app/components/header-footer/MenuItem';

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
  const { toast } = useToast();

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
  }, [pathname, params.lng]);

  return (
    <>
      <footer className="z-50 block w-full xl:fixed xl:bottom-0">
        <Image
          src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-typo-light.svg"
          alt="Jérôme Sembres Portfolio - Logo Typo Light"
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
              <MenuItem
                path={`/${lng}/legal-notice`}
                title={t('footer-menu-legal-notice-item')}
                activeTitle={t('footer-menu-legal-notice-item-active')}
              />
              <MenuItem
                path={`/${lng}/privacy-policy`}
                title={t('footer-menu-privacy-policy-item')}
                activeTitle={t('footer-menu-privacy-policy-item-active')}
              />
              <a
                onClick={() => {
                  if (pathname.includes('/en')) {
                    toast({
                      title: 'Langue modifiée!',
                      description: 'Vous êtes maintenant sur la version française du site.',
                      action: <ToastAction altText="Annuler">Annuler</ToastAction>,
                    });
                    setTimeout(() => {
                      router.push(frenchUrl);
                    }, 250);
                  } else {
                    toast({
                      title: 'Language changed!',
                      description: "You're now on the english version on this website.",
                      action: <ToastAction altText="Undo">Undo</ToastAction>,
                    });
                    setTimeout(() => {
                      router.push(englishUrl);
                    }, 250);
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
