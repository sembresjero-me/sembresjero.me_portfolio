import About from '@/app/components/about/About';

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
  const pageSlug: string = 'about';

  // fetch data

  if (language === 'en') {
    metaTitle = 'About Me ~ Jérôme Sembres, Fullstack Web Developer';
    metaDescription =
      "Here you'll find the best résumé of how my professional career has been going. From project management to my actual Fullstack Developer job, take a look at what i'm capable of!";
    metaApplicationName = seoVariables.en.metaApplicationName;
    pageUrl = `/en/${pageSlug}`;
    ogSitename = seoVariables.en.ogSitename;
    ogImageUrl = seoVariables.en.ogImageUrl;
    ogImageAlt = seoVariables.en.ogImageAlt;
    ogLocales = seoVariables.en.ogLocales;
  } else {
    metaTitle = 'À Propos De Moi ~ Jérôme Sembres, Développeur Web Fullstack';
    metaDescription =
      'Apprenez-en plus sur mon parcours professionnel, mes expériences, mais également sur moi-même. De la gestion de projet au développement web, découvrez de quoi je suis capable.';
    metaApplicationName = seoVariables.fr.metaApplicationName;
    pageUrl = `/fr/${pageSlug}`;
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
        'en-AU': `/en/${pageSlug}`,
        'en-CA': `/en/${pageSlug}`,
        'en-GB': `/en/${pageSlug}`,
        'en-NZ': `/en/${pageSlug}`,
        'en-US': `/en/${pageSlug}`,
        'en-ZA': `/en/${pageSlug}`,
        'fr-BE': `/fr/${pageSlug}`,
        'fr-CA': `/fr/${pageSlug}`,
        'fr-CH': `/fr/${pageSlug}`,
        'fr-FR': `/fr/${pageSlug}`,
        'fr-LU': `/fr/${pageSlug}`,
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
      <About lng={lng} />
    </>
  );
};

export default BentoPage;
