import enTranslations from './en.json';
import ruTranslations from './ru.json';
import deTranslations from './de.json';

export type Language = 'ru' | 'en' | 'de';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    features: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      author: string;
      role: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    copyright: string;
    slogan: string;
    telegram: string;
  };
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  ru: ruTranslations,
  de: deTranslations,
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function t(lang: Language, key: string): string | string[] {
  const keys = key.split('.');
  let value: any = translations[lang] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export const supportedLanguages: Language[] = ['en', 'ru', 'de'];
