"use client";

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
      <header className="fixed w-full h-[70px] z-50">
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
                <a href="#" className="">
                  {t("header-menu-third-item")}
                </a>
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
