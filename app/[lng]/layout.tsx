import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import ClientOnly from "@/app/components/ClientOnly";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import App from "@/app/components/App";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--custom-font-instrument_serif",
  display: "swap",
  adjustFontFallback: false,
});

// Font files can be colocated inside of `pages`
const nohemi = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Nohemi-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Nohemi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--custom-font-nohemi",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | GUESS THE SNEAKERS, A SNEAKERS QUIZZ GAME",
    default: "GUESS THE SNEAKERS | THE BEST FREE SNEAKERS QUIZZ GAME! ",
  },
  authors: [
    { name: "JÉRÔME SEMBRES" },
    { name: "JÉRÔME SEMBRES", url: "https://www.sembresjero.me/" },
  ],
  applicationName: "GUESS THE SNEAKERS",
  metadataBase: new URL("https://www.guessthesneakers.com"),
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${instrumentSerif.variable} ${nohemi.variable} `}>
        <ClientOnly>
          <App lng={lng} children={children} />
        </ClientOnly>
      </body>
    </html>
  );
}
