"use client";

import { useTranslation } from "@/app/i18n/client";

interface FooterProps {
  lng: any;
}

const Footer: React.FC<FooterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");

  return (
    <>
      <footer className="fixed w-full bottom-0 h-[70px] z-50">
        <nav className="w-full h-full px-8 py-4">
          <div className="flex justify-end items-center">
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
        </nav>
      </footer>
    </>
  );
};

export default Footer;
