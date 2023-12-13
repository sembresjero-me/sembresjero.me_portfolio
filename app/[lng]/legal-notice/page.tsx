import LegalNotice from '@/app/components/legal/LegalNotice';

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
  const pageSlug: string = 'legal-notice';

  // fetch data

  if (language === 'en') {
    metaTitle = 'Legal Notice ~ Jérôme Sembres, Fullstack Web Developer';
    metaDescription =
      "Find here every legal informations required for the Jérôme Sembres's portfolio website.";
    metaApplicationName = seoVariables.en.metaApplicationName;
    pageUrl = `/en/${pageSlug}`;
    ogSitename = seoVariables.en.ogSitename;
    ogImageUrl = seoVariables.en.ogImageUrl;
    ogImageAlt = seoVariables.en.ogImageAlt;
    ogLocales = seoVariables.en.ogLocales;
  } else {
    metaTitle = 'Mentions Légales ~ Jérôme Sembres, Développeur Web Fullstack';
    metaDescription =
      'Retrouvez ici toutes les informations légales obligatoires pour le site portfolio de Jérôme Sembres.';
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
}

interface LegalNoticePageProps {
  params: { lng: string };
}

const LegalNoticePage: React.FC<LegalNoticePageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <LegalNotice lng={lng} />
    </>
  );
};

export default LegalNoticePage;
