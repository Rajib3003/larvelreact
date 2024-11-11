import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/common.json';
import bnTranslations from './locales/bn/common.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      bn: {
        translation: bnTranslations,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if the translation is missing in the selected language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
