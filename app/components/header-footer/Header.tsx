'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { usePageTransition } from '@/app/hooks/usePageTransition';
import { useIsMobileMenuOpen } from '@/app/hooks/useIsMobileMenuOpen';
import { useIsContactActive } from '@/app/hooks/useIsContactActive';
import ContactItem from '@/app/components/header-footer/ContactItem';
import MobileMenu from '@/app/components/header-footer/MobileMenu';
import MenuItem from '@/app/components/header-footer/MenuItem';

import { useClickAway } from 'react-use';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n';

interface HeaderProps {
  lng: any;
}

const Header: React.FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');
  const router = useRouter();
  const { count, setCount } = usePageTransition();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useIsMobileMenuOpen();
  const { isContactActive, setIsContactActive } = useIsContactActive();
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsContactActive(false);
  });

  console.log('is contact active:', isContactActive);

  return (
    <>
      <header className="absolute top-0 z-50 h-[70px] w-full xl:fixed">
        <nav className="h-full w-full px-4 py-4 md:px-8 xl:px-12">
          <div className="grid grid-cols-2 items-center justify-items-stretch">
            <div className="flex items-center space-x-12 justify-self-start">
              <Image
                src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-gif-logo-light.gif"
                alt="Jérôme Sembres Portfolio - Logo"
                width={30}
                height={35}
                onClick={() => {
                  setCount(count + 1);
                  setTimeout(() => {
                    router.push(`/${lng}`);
                  }, 500);
                }}
              />
              <div className="hidden items-center space-x-12 xl:flex">
                <MenuItem
                  path={`/${lng}`}
                  activeTitle={t('header-menu-home-item-active')}
                  title={t('header-menu-home-item')}
                />
                <MenuItem
                  path={`/${lng}/projects`}
                  activeTitle={t('header-menu-projects-item-active')}
                  title={t('header-menu-projects-item')}
                />
                <MenuItem
                  path={`/${lng}/about`}
                  activeTitle={t('header-menu-about-item-active')}
                  title={t('header-menu-about-item')}
                />
                <Popover>
                  <PopoverTrigger
                    onClick={() => {
                      {
                        isContactActive ? setIsContactActive(false) : setIsContactActive(true);
                      }
                    }}
                    ref={ref}
                  >
                    <a href="#">
                      {isContactActive
                        ? t('header-menu-contact-item-active')
                        : t('header-menu-contact-item')}
                    </a>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ContactItem
                      id={1}
                      name="E-mail"
                      title="bonjour@sembresjero.me"
                      link="mailto:bonjour@sembresjero.me"
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-mail.svg"
                    />
                    <ContactItem
                      id={2}
                      name="LinkedIn"
                      title="@jeromesembres"
                      link="https://www.linkedin.com/in/jeromesembres/"
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-linkedin.svg"
                    />
                    <ContactItem
                      id={3}
                      name="Instagram"
                      title="@sembresjero.me"
                      link="https://www.instagram.com/sembresjero.me/"
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-instagram.svg"
                    />
                    <ContactItem
                      id={4}
                      name="Read.cv"
                      title="@sembresjerome"
                      link="https://read.cv/sembresjerome/"
                      imageLink="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-read-cv.svg"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="hidden justify-self-end xl:flex">
              <p className="text-secondary">{t('header-availability-text')}</p>
              <p className="mx-4 text-secondary">~</p>
              <p className="text-secondary">{t('header-location-text')}</p>
            </div>
            <Image
              src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-mobile-menu-icon-light.svg"
              alt="Jérôme Sembres Portfolio - Mobile Menu Icon"
              width={20}
              height={20}
              onClick={() => {
                setIsMobileMenuOpen(true);
              }}
              className="block justify-self-end xl:hidden"
            />
            {isMobileMenuOpen && <MobileMenu lng={lng} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
