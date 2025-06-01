import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import uk from './locales/uk/translation.json';
import tr from './locales/tr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      tr: { translation: tr },
      uk: { translation: uk }
    },
    lng: 'de',
    fallbackLng: 'de',
    interpolation: { escapeValue: false }
  });

export default i18n;