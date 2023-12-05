"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface HeaderProps {
  lng: any;
}

const Header: React.FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "header");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <header className="fixed top-0 w-full h-[70px] z-50">
        <nav className="w-full h-full px-8 py-4">
          <div className="grid grid-cols-2 justify-items-stretch items-center">
            <div className="justify-self-start flex items-center space-x-12">
              <Image
                src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo.gif"
                alt="Jérôme Sembres Portfolio - Logo"
                width={35}
                height={35}
                onClick={() => {
                  pathname.includes("/en/")
                    ? router.push(`/${lng}`)
                    : router.push("#");
                }}
              />
              <div className="flex items-center space-x-12">
                <a
                  onClick={() => {
                    pathname.includes("projects")
                      ? router.push("#")
                      : router.push(`/${lng}/projects`);
                  }}
                >
                  {pathname.includes("projects")
                    ? t("header-menu-first-item-hover")
                    : t("header-menu-first-item")}
                </a>
                <a
                  onClick={() => {
                    pathname.includes("about")
                      ? router.push("#")
                      : router.push(`/${lng}/about`);
                  }}
                >
                  {pathname.includes("about")
                    ? t("header-menu-second-item-hover")
                    : t("header-menu-second-item")}
                </a>
                <Popover>
                  <PopoverTrigger>
                    <a href="#">{t("header-menu-third-item")}</a>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div
                      className="w-full flex justify-center items-center mb-1"
                      onClick={() => {
                        router.push("mailto:bonjour@sembresjero.me");
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
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push(
                          "https://www.linkedin.com/in/jeromesembres/"
                        );
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
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push("https://www.instagram.com/sembresjero.me/");
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
                      className="w-full flex justify-center items-center my-1"
                      onClick={() => {
                        router.push(
                          "https://read.cv/sembresjerome/"
                        );
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
            <p className="justify-self-end text-secondary">
              {t("header-custom-text")}
            </p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
