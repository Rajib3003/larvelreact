import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // language auto-detection
import Backend from 'i18next-http-backend'; // For loading translations from external files

i18n
  .use(Backend) // Load translations from backend
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Initialize i18next for React
  .init({
    fallbackLng: 'en', // Default language is English
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: {
          "homework": "Homework",
          "language": "বাংলা",
          "help":"Help",
          "home":"Home",
        },
      },
      bn: {
        translation: {
          "homework": "বাড়ির কাজ",
          "language": "English",
          "help":"সাহায্য",
          "home":"হোম",

        },
      },
    },
  });

export default i18n;
