import Projects from '@/app/components/projects/Projects';

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
  const pageSlug: string = 'projects';

  // fetch data

  if (language === 'en') {
    metaTitle = 'Projects ~ Jérôme Sembres, Fullstack Web Developer';
    metaDescription =
      "Through my 7+ years working in the digital world, i've worked on many different projects. Here is some of the recents & bests ones i've worked on, don't be shy and take a look at those!";
    metaApplicationName = seoVariables.en.metaApplicationName;
    pageUrl = `/en/${pageSlug}`;
    ogSitename = seoVariables.en.ogSitename;
    ogImageUrl = seoVariables.en.ogImageUrl;
    ogImageAlt = seoVariables.en.ogImageAlt;
    ogLocales = seoVariables.en.ogLocales;
  } else {
    metaTitle = 'Projets ~ Jérôme Sembres, Développeur Web Fullstack';
    metaDescription =
      "Au cours de mes 7 années de travail dans le monde du digital, j’ai travaillé sur de nombreux projets très différents. Voici quelques-uns des plus récents et des meilleurs sur lesquels j’ai pu travailler, n'hésitez pas à y jetez un coup d'oeil!";
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

interface ProjectsPageProps {
  params: { lng: string };
}

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params: { lng } }) => {
  return (
    <>
      <Projects lng={lng} />
    </>
  );
};

export default ProjectsPage;
