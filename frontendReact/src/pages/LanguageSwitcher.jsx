import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language dynamically
  };

  // Determine if the current language is Bengali
  const isBangla = i18n.language === 'bn';

  return (
    <a
      className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
      onClick={() => changeLanguage(isBangla ? 'en' : 'bn')} // Toggle language on click
      style={{ cursor: 'pointer' }}
    >
      {isBangla ? t('language') : t('language')} {/* Dynamically set button text */}
    </a>
  );
};

export default LanguageSwitcher;
