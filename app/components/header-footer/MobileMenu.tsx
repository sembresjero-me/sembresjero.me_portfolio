'use client';

import ContactItem from '@/app/components/header-footer/ContactItem';
import { usePageTransition } from '@/app/hooks/usePageTransition';
import { useIsMobileMenuOpen } from '@/app/hooks/useIsMobileMenuOpen';
import { useIsContactActive } from '@/app/hooks/useIsContactActive';
import MenuItem from '@/app/components/header-footer/MenuItem';

import { useClickAway } from 'react-use';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n';

interface MobileMenuProps {
  lng: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');
  const router = useRouter();
  const { count, setCount } = usePageTransition();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useIsMobileMenuOpen();
  const { isContactActive, setIsContactActive } = useIsContactActive();
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsContactActive(false);
  });

  return (
    <>
      <div className="fixed left-0 top-0 z-[200] h-screen w-full bg-card xl:hidden">
        <div className="flex h-full w-full flex-col gap-8">
          <div className="grid h-[70px] w-full grid-cols-2 items-center justify-items-stretch px-4 py-4 sm:px-8 lg:px-12">
            <Image
              src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-gif-logo-dark.gif"
              alt="Jérôme Sembres Portfolio - Logo"
              width={30}
              height={35}
              onClick={() => {
                setCount(count + 1);
                isMobileMenuOpen && setIsMobileMenuOpen(false);
                router.push(`/${lng}`);
              }}
            />
            <Image
              src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-mobile-menu-icon-dark.svg"
              alt="Jérôme Sembres Portfolio - Mobile Menu Icon"
              width={20}
              height={20}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="justify-self-end"
            />
          </div>
          <div className="flex h-full w-full grow flex-col px-4 sm:px-8 lg:px-12">
            <MenuItem
              type="mobile"
              path={`/${lng}`}
              activeTitle={t('header-menu-home-item-active')}
              title={t('header-menu-home-item')}
            />
            <MenuItem
              type="mobile"
              path={`/${lng}/projects`}
              activeTitle={t('header-menu-projects-item-active')}
              title={t('header-menu-projects-item')}
            />
            <MenuItem
              type="mobile"
              path={`/${lng}/about`}
              activeTitle={t('header-menu-about-item-active')}
              title={t('header-menu-about-item')}
            />
            <a
              className="mb-4 text-4xl text-primary sm:text-5xl md:text-6xl"
              onClick={() => {
                {
                  isContactActive ? setIsContactActive(false) : setIsContactActive(true);
                }
              }}
            >
              {t('header-menu-contact-item')}
            </a>
            {isContactActive && (
              <div className="transition-transform">
                <ContactItem
                  id={1}
                  type="mobile"
                  name="E-mail"
                  title="bonjour@sembresjero.me"
                  link="mailto:bonjour@sembresjero.me"
                  imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-mail.svg"
                />
                <ContactItem
                  id={2}
                  type="mobile"
                  name="LinkedIn"
                  title="@jeromesembres"
                  link="https://www.linkedin.com/in/jeromesembres/"
                  imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-linkedin.svg"
                />
                <ContactItem
                  id={3}
                  type="mobile"
                  name="Instagram"
                  title="@sembresjero.me"
                  link="https://www.instagram.com/sembresjero.me/"
                  imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-instagram.svg"
                />
                <ContactItem
                  id={4}
                  type="mobile"
                  name="Read.cv"
                  title="@sembresjerome"
                  link="https://read.cv/sembresjerome/"
                  imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-read-cv.svg"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 px-4 pb-4 sm:px-8 lg:px-12">
            <p className="text-2xl text-primary">{t('header-availability-text')}</p>
            <p className="mb-0 text-2xl leading-none text-primary">{t('header-location-text')}</p>
          </div>
          <Image
            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-typo-dark.svg"
            alt="Jérôme Sembres Portfolio - Typo"
            width={30}
            height={123}
            className="fixed bottom-4 right-4 z-[251] sm:right-8 lg:right-12 xl:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
