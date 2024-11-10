import React, { useState } from 'react';
import { useTranslation  } from 'react-i18next';

// const LanguageSwitcher = () => {
  // const { i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng); 
  // };

  const LanguageButton = () => {
    const { t, i18n } = useTranslation();
  
    // Language state
    const [isBangla, setIsBangla] = useState(false);
  
    // Toggle language function
    const toggleLanguage = () => {
      const newLang = isBangla ? 'en' : 'bn';  // Toggle between English and Bengali
      i18n.changeLanguage(newLang);  // Change language in i18n
      setIsBangla(!isBangla);  // Toggle the state
    };
  

  return (
    // <div>
    //   <button onClick={() => changeLanguage('en')}>English</button>
    //   <button onClick={() => changeLanguage('bn')}>বাংলা</button>
      
    // </div>
    <a
   
    className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
    onClick={toggleLanguage}
  >
    {t('language')} 
  </a>
  );
};

export default LanguageButton;
