import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import 'intl-pluralrules';

import en from './languages/en.json';

const resources = {
  en: {
    translation: en as ResourceLanguage,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    console.warn('Failed to initialize i18next', err);
  });

export const useTranslationPrefix = (prefix: string) => {
  const { t } = useTranslation();
  return (key: string) => t(`${prefix}.${key}`);
};

export default i18n;
