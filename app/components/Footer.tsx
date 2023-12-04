"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface FooterProps {
  lng: any;
}

const Footer: React.FC<FooterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <footer className="fixed w-full bottom-0 h-[70px] z-50">
        <nav className="w-full h-full px-8 py-4">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-12">
              <a
                onClick={() => {
                  pathname.includes("legal-notice")
                    ? router.push("#")
                    : router.push(`/${lng}/legal-notice`);
                }}
              >
                {pathname.includes("legal-notice")
                  ? t("footer-menu-first-item-hover")
                  : t("footer-menu-first-item")}
              </a>
              <a
                onClick={() => {
                  pathname.includes("privacy-policy")
                    ? router.push("#")
                    : router.push(`/${lng}/privacy-policy`);
                }}
              >
                {pathname.includes("privacy-policy")
                  ? t("footer-menu-second-item-hover")
                  : t("footer-menu-second-item")}
              </a>
              <a href="#" className="">
                {t("footer-menu-third-item")}
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
