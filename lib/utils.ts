import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const seoVariables = {
  en: {
    metaApplicationName: "Jérôme Sembres's Portfolio",
    ogSitename: "Jérôme Sembres's Portfolio",
    ogImageUrl:
      'https://s3.eu-west-3.amazonaws.com/sembresjero.me/og/sembresjero-me-og-image-en.jpg',
    ogImageAlt: "Open Graph Image from the Jérôme Sembres's portfolio website.",
    ogLocales: 'en_GB',
  },
  fr: {
    metaApplicationName: 'Portfolio de Jérôme Sembres',
    ogSitename: 'Portfolio de Jérôme Sembres',
    ogImageUrl:
      'https://s3.eu-west-3.amazonaws.com/sembresjero.me/og/sembresjero-me-og-image-fr.jpg',
    ogImageAlt: 'Image de partage pour les réseaux sociaux du site portfolio de Jérôme Sembres.',
    ogLocales: 'fr_FR',
  },
};
