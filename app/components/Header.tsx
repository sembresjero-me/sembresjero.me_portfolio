'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { usePageTransition } from '@/app/hooks/usePageTransition';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

interface HeaderProps {
  lng: any;
}

const Header: React.FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');
  const [isContactActive, setIsContactActive] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { count, setCount } = usePageTransition();

  return (
    <>
      <header className="absolute top-0 z-50 h-[70px] w-full lg:fixed">
        <nav className="h-full w-full p-4">
          <div className="grid grid-cols-2 items-center justify-items-stretch">
            <div className="flex items-center space-x-12 justify-self-start">
              <Image
                src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo.gif"
                alt="Jérôme Sembres Portfolio - Logo"
                width={35}
                height={35}
                onClick={() => {
                  setCount(count + 1);
                  setTimeout(() => {
                    router.push(`/${lng}`);
                  }, 500);
                }}
              />
              <div className="hidden items-center space-x-12 xl:flex">
                <a
                  onClick={() => {
                    if (pathname === `/${lng}`) {
                      router.push('#');
                    } else {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push(`/${lng}`);
                      }, 500);
                    }
                  }}
                >
                  {pathname === `/${lng}`
                    ? t('header-menu-home-item-active')
                    : t('header-menu-home-item')}
                </a>
                <a
                  onClick={() => {
                    if (pathname.includes('/projects')) {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push('#');
                      }, 500);
                    } else {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push(`/${lng}/projects`);
                      }, 500);
                    }
                  }}
                >
                  {pathname.includes('/projects')
                    ? t('header-menu-projects-item-active')
                    : t('header-menu-projects-item')}
                </a>
                <a
                  onClick={() => {
                    if (pathname.includes('/about')) {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push('#');
                      }, 500);
                    } else {
                      setCount(count + 1);
                      setTimeout(() => {
                        router.push(`/${lng}/about`);
                      }, 500);
                    }
                  }}
                >
                  {pathname.includes('/about')
                    ? t('header-menu-about-item-active')
                    : t('header-menu-about-item')}
                </a>
                <Popover>
                  <PopoverTrigger
                    onClick={() => {
                      {
                        isContactActive ? setIsContactActive(false) : setIsContactActive(true);
                      }
                    }}
                  >
                    <a href="#">
                      {isContactActive
                        ? t('header-menu-contact-item-active')
                        : t('header-menu-contact-item')}
                    </a>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div
                      className="mb-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('mailto:bonjour@sembresjero.me');
                      }}
                    >
                      <p className="me-2">bonjour@sembresjero.me</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-mail.svg"
                        alt="Jérôme Sembres | Spotify Logo"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className="my-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://www.linkedin.com/in/jeromesembres/');
                      }}
                    >
                      <p className="me-2">@jeromesembres</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-linkedin.svg"
                        alt="Jérôme Sembres | Apple Music Logo"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className="my-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://www.instagram.com/sembresjero.me/');
                      }}
                    >
                      <p className="me-2">@sembresjero.me</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-instagram.svg"
                        alt="Jérôme Sembres | Deezer Logo"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className="mt-1 flex w-full items-center justify-center"
                      onClick={() => {
                        router.push('https://read.cv/sembresjerome/');
                      }}
                    >
                      <p className="me-2">@sembresjerome</p>
                      <img
                        src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-read-cv.svg"
                        alt="Jérôme Sembres | YouTube Logo"
                        width={20}
                        height={20}
                      />
                    </div>
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
            {isMobileMenuOpen && (
              <div className="fixed left-0 top-0 z-[200] h-screen w-full bg-card xl:hidden">
                <div className="flex h-full w-full flex-col gap-8">
                  <div className="grid h-[70px] w-full grid-cols-2 items-center justify-items-stretch p-4">
                    <Image
                      src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo.gif"
                      alt="Jérôme Sembres Portfolio - Logo"
                      width={35}
                      height={35}
                      className="justify-self-start"
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
                  <div className="flex h-full w-full grow flex-col px-4">
                    <a
                      className="mb-4 text-4xl text-primary"
                      onClick={() => {
                        if (pathname === `/${lng}`) {
                          router.push('#');
                        } else {
                          setCount(count + 1);
                          setTimeout(() => {
                            router.push(`/${lng}`);
                          }, 500);
                        }
                      }}
                    >
                      {pathname === `/${lng}`
                        ? t('header-menu-home-item-active')
                        : t('header-menu-home-item')}
                    </a>
                    <a
                      className="mb-4 text-4xl text-primary"
                      onClick={() => {
                        if (pathname.includes('/projects')) {
                          setCount(count + 1);
                          setTimeout(() => {
                            router.push('#');
                          }, 500);
                        } else {
                          setCount(count + 1);
                          setTimeout(() => {
                            router.push(`/${lng}/projects`);
                          }, 500);
                        }
                      }}
                    >
                      {pathname.includes('/projects')
                        ? t('header-menu-projects-item-active')
                        : t('header-menu-projects-item')}
                    </a>
                    <a
                      className="mb-4 text-4xl text-primary"
                      onClick={() => {
                        if (pathname.includes('/about')) {
                          setCount(count + 1);
                          setTimeout(() => {
                            router.push('#');
                          }, 500);
                        } else {
                          setCount(count + 1);
                          setTimeout(() => {
                            router.push(`/${lng}/about`);
                          }, 500);
                        }
                      }}
                    >
                      {pathname.includes('/about')
                        ? t('header-menu-about-item-active')
                        : t('header-menu-about-item')}
                    </a>
                    <a
                      className="mb-4 text-4xl text-primary"
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
                        <div
                          className="mb-1 flex w-full items-center"
                          onClick={() => {
                            router.push('mailto:bonjour@sembresjero.me');
                          }}
                        >
                          <p className="me-2">bonjour@sembresjero.me</p>
                          <img
                            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-mail.svg"
                            alt="Jérôme Sembres | Contact E-mail Logo"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div
                          className="my-1 flex w-full items-center"
                          onClick={() => {
                            router.push('https://www.linkedin.com/in/jeromesembres/');
                          }}
                        >
                          <p className="me-2">@jeromesembres</p>
                          <img
                            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-linkedin.svg"
                            alt="Jérôme Sembres | Contact LinkedIn Logo"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div
                          className="my-1 flex w-full items-center"
                          onClick={() => {
                            router.push('https://www.instagram.com/sembresjero.me/');
                          }}
                        >
                          <p className="me-2">@sembresjero.me</p>
                          <img
                            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-instagram.svg"
                            alt="Jérôme Sembres | Deezer Logo"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div
                          className="mt-1 flex w-full items-center"
                          onClick={() => {
                            router.push('https://read.cv/sembresjerome/');
                          }}
                        >
                          <p className="me-2">@sembresjerome</p>
                          <img
                            src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/contact/sembresjero-me-contact-logo-read-cv.svg"
                            alt="Jérôme Sembres | YouTube Logo"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 px-4 pb-4">
                    <p className="text-2xl text-primary">{t('header-availability-text')}</p>
                    <p className="mb-0 text-2xl leading-none text-primary">
                      {t('header-location-text')}
                    </p>
                  </div>
                  <Image
                    src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo-typo-dark.svg"
                    alt="Jérôme Sembres Portfolio - Typo"
                    width={30}
                    height={123}
                    className="fixed bottom-5 right-4 z-[251] lg:hidden"
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
