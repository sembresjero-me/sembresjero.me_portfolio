"use client";

import dayjs from "dayjs";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface HeaderProps {
  lng: any;
}

const Header: React.FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "header");

  return (
    <>
      <header className="fixed w-full h-[70px] z-50">
        <nav className="w-full h-full px-8 py-4">
          <div className="grid grid-cols-2 justify-items-stretch items-center">
            <div className="justify-self-start flex items-center space-x-8">
              <Image
                src="https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-logo.gif"
                alt="Jérôme Sembres Portfolio - Logo"
                width={35}
                height={35}
              />
              <div className="flex items-center space-x-8">
                <a href="#" className="">
                  {t("first-menu-item")}
                </a>
                <a href="#" className="">
                  {t("second-menu-item")}
                </a>
                <a href="#" className="">
                  {t("third-menu-item")}
                </a>
              </div>
            </div>
            <div className="justify-self-end flex items-center space-x-4">
              <div>Available right now</div>
              <div>•</div>
              <div>Toulon, France / Worldwide</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
