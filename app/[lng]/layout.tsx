import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';
import ClientOnly from '@/app/components/various/ClientOnly';
import localFont from 'next/font/local';
import { Instrument_Serif } from 'next/font/google';
import type { Metadata } from 'next';
import '@/app/globals.css';
import App from '@/app/components/App';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--custom-font-instrument_serif',
  display: 'swap',
  adjustFontFallback: false,
});

// Font files can be colocated inside of `pages`
const nohemi = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Nohemi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--custom-font-nohemi',
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  authors: [{ name: 'Jérôme Sembres', url: 'https://www.sembresjero.me' }],
  creator: 'Jérôme Sembres',
  publisher: 'Jérôme Sembres',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://www.sembresjero.me'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
          <App lng={lng}>{children}</App>
        </ClientOnly>
      </body>
    </html>
  );
}
