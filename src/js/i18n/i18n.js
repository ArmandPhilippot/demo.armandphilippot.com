import I18n from 'i18n-js';
import en from './locales/en';
import fr from './locales/fr';

const supportedLanguages = [
  {
    code: 'en',
    label: 'English',
    translations: en,
  },
  {
    code: 'fr',
    label: 'Français',
    translations: fr,
  },
];

supportedLanguages.forEach((locale) => {
  I18n.translations[locale.code] = locale.translations;
});

function setLocale(locale) {
  I18n.locale = locale;
}

function currentLocale() {
  return I18n.currentLocale();
}

function translate(name, params = {}) {
  return I18n.t(name, params);
}

const { defaultLocale } = I18n;

export {
  supportedLanguages,
  setLocale,
  translate,
  defaultLocale,
  currentLocale,
};
