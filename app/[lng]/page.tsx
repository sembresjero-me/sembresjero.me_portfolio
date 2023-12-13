import Bento from '@/app/components/bento/Bento';

import { Metadata } from 'next';
import { seoVariables } from '@/lib/utils';

type Props = {
  params: any;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // dynamic variables
  let metaTitle: string;
  let metaDescription: string;
  let metaApplicationName: string;
  let pageUrl: string;
  let ogSitename: string;
  let ogImageUrl: string;
  let ogImageAlt: string;
  let ogLocales: string;

  // read route params
  const language = params.lng;

  // fetch data

  if (language === 'en') {
    metaTitle = 'Jérôme Sembres ~ Fullstack Web Developer';
    metaDescription =
      "From classic showcase websites to fully custom software or mobile app, i'll help you conquer the web with my Fullstack Web Developer skills. Everything's possible so let's talk! ";
    metaApplicationName = seoVariables.en.metaApplicationName;
    pageUrl = '/en';
    ogSitename = seoVariables.en.ogSitename;
    ogImageUrl = seoVariables.en.ogImageUrl;
    ogImageAlt = seoVariables.en.ogImageAlt;
    ogLocales = seoVariables.en.ogLocales;
  } else {
    metaTitle = 'Jérôme Sembres ~ Développeur Web Fullstack';
    metaDescription =
      "Que ce soit pour un site web vitrine classique, un logiciel sur-mesure ou bien une application mobile, je mettrai mes compétences de développeur web fullstack au service de votre projet, n'hésitez pas à venir m'en parler!";
    metaApplicationName = seoVariables.fr.metaApplicationName;
    pageUrl = '/fr';
    ogSitename = seoVariables.fr.ogSitename;
    ogImageUrl = seoVariables.fr.ogImageUrl;
    ogImageAlt = seoVariables.fr.ogImageAlt;
    ogLocales = seoVariables.fr.ogLocales;
  }

  return {
    title: metaTitle,
    description: metaDescription,
    applicationName: metaApplicationName,
    alternates: {
      canonical: pageUrl,
      languages: {
        'en-AU': `/en`,
        'en-CA': `/en`,
        'en-GB': `/en`,
        'en-NZ': `/en`,
        'en-US': `/en`,
        'en-ZA': `/en`,
        'fr-BE': `/fr`,
        'fr-CA': `/fr`,
        'fr-CH': `/fr`,
        'fr-FR': `/fr`,
        'fr-LU': `/fr`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: pageUrl,
      siteName: ogSitename,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 675,
          alt: ogImageAlt,
        },
      ],
      locale: ogLocales,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

interface BentoPageProps {
  params: { lng: string };
}

const BentoPage: React.FC<BentoPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <Bento lng={lng} />
    </>
  );
};

export default BentoPage;
