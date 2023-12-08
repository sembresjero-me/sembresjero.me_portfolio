import About from '@/app/components/About';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LEGAL NOTICE',
  description: 'LEGAL INFORMATIONS ON THE TEAM ADMINISTRATING THE GUESS THE SNEAKERS WEBSITE.',
  openGraph: {
    title: 'LEGAL NOTICE',
    description: 'LEGAL INFORMATIONS ON THE TEAM ADMINISTRATING THE GUESS THE SNEAKERS WEBSITE.',
    url: `/legal-notice`,
    siteName: 'GUESS THE SNEAKERS',
    images: [
      {
        url: 'https://sneakers-quizz-app.s3.eu-west-3.amazonaws.com/guess-the-sneakers-og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'GUESS THE SNEAKERS OG IMAGE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

interface BentoPageProps {
  params: { lng: string };
}

const BentoPage: React.FC<BentoPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <About lng={lng} />
    </>
  );
};

export default BentoPage;
