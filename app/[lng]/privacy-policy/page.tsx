import PrivacyPolicy from '@/app/components/PrivacyPolicy';

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
  let ogUrl: string;
  let ogSitename: string;
  let ogImageUrl: string;
  let ogImageAlt: string;
  let ogLocales: string;

  // read route params
  const language = params.lng;

  // fetch data

  if (language === 'en') {
    metaTitle = 'Privacy Policy ~ Jérôme Sembres, Fullstack Web Developer';
    metaDescription =
      "Find here every data treatment informations required for the Jérôme Sembres's portfolio website.";
    metaApplicationName = seoVariables.en.metaApplicationName;
    ogUrl = '/en/privacy-policy';
    ogSitename = seoVariables.en.ogSitename;
    ogImageUrl = seoVariables.en.ogImageUrl;
    ogImageAlt = seoVariables.en.ogImageAlt;
    ogLocales = seoVariables.en.ogLocales;
  } else {
    metaTitle = 'Politique De Confidentialité ~ Jérôme Sembres, Développeur Web Fullstack';
    metaDescription =
      'Retrouvez ici toutes les informations légales obligatoires sur le traitement des données pour le site portfolio de Jérôme Sembres.';
    metaApplicationName = seoVariables.fr.metaApplicationName;
    ogUrl = '/fr/privacy-policy';
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
      canonical: ogUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: ogUrl,
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

interface PrivacyPolicyPageProps {
  params: { lng: string };
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <PrivacyPolicy lng={lng} />
    </>
  );
};

export default PrivacyPolicyPage;
