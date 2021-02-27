import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../../locales/en.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

I18n.locale = 'en';

I18n.defaultLocale = 'en';

// Define the supported translations
I18n.translations = {
  en,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(false);

ReactNative.I18nManager.forceRTL(false);

// The method we'll use instead of a regular string
export function translate(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
