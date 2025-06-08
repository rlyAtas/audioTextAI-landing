export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  path: string;
}

export const languages: Record<string, Language> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    path: '/en'
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    path: '/ru'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    path: '/de'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    path: '/fr'
  }
};

export const defaultLanguage = 'en';

export const supportedLanguages = Object.keys(languages);

// Получить язык по коду
export function getLanguage(code: string): Language | undefined {
  return languages[code];
}

// Получить все языки кроме текущего
export function getOtherLanguages(currentLang: string): Language[] {
  return Object.values(languages).filter(lang => lang.code !== currentLang);
}

// Получить URL для другого языка
export function getLanguageUrl(targetLang: string, currentPath?: string): string {
  const targetLanguage = getLanguage(targetLang);
  if (!targetLanguage) return '/';
  
  // Если есть текущий путь, заменяем язык в нём
  if (currentPath && currentPath.startsWith('/')) {
    const pathParts = currentPath.split('/');
    if (pathParts[1] && supportedLanguages.includes(pathParts[1])) {
      pathParts[1] = targetLang;
      return pathParts.join('/');
    }
  }
  
  return targetLanguage.path;
}
