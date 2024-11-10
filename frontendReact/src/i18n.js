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
          "hello": "Hello, how are you?",
          "welcome": "Welcome to our website",
        },
      },
      bn: {
        translation: {
          "hello": "হ্যালো, কেমন আছো?",
          "welcome": "আমাদের সাইটে স্বাগতম",
        },
      },
    },
  });

export default i18n;
