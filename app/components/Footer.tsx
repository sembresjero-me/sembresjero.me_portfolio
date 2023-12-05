"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface FooterProps {
  lng: any;
}

const Footer: React.FC<FooterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");
  const [englishUrl, setEnglishUrl] = useState<string>("");
  const [frenchUrl, setFrenchUrl] = useState<string>("");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.lng === "en") {
      setEnglishUrl(pathname);
      const currentUrlInFrench = pathname.replace("/en", "/fr");
      setFrenchUrl(currentUrlInFrench);
    } else {
      setFrenchUrl(pathname);
      const currentUrlInEnglish = pathname.replace("/fr", "/en");
      setEnglishUrl(currentUrlInEnglish);
    }
  }, []);

  return (
    <>
      <footer className="fixed w-full bottom-0 h-[70px] z-50">
        <nav className="w-full h-full px-8 py-4">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-12">
              <a
                onClick={() => {
                  pathname.includes("/legal-notice")
                    ? router.push("#")
                    : router.push(`/${lng}/legal-notice`);
                }}
              >
                {pathname.includes("/legal-notice")
                  ? t("footer-menu-legal-notice-item-active")
                  : t("footer-menu-legal-notice-item")}
              </a>
              <a
                onClick={() => {
                  pathname.includes("/privacy-policy")
                    ? router.push("#")
                    : router.push(`/${lng}/privacy-policy`);
                }}
              >
                {pathname.includes("/privacy-policy")
                  ? t("footer-menu-privacy-policy-item-active")
                  : t("footer-menu-privacy-policy-item")}
              </a>
              <a
                onClick={() => {
                  pathname.includes("/en")
                    ? router.push(frenchUrl)
                    : router.push(englishUrl);
                }}
              >
                {pathname.includes("/en")
                  ? t("footer-menu-language-switcher-english-item-active")
                  : t("footer-menu-language-switcher-english-item")}{" "}
                /{" "}
                {pathname.includes("/fr")
                  ? t("footer-menu-language-switcher-french-item-active")
                  : t("footer-menu-language-switcher-french-item")}
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
