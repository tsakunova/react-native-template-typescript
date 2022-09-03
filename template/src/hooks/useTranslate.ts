import I18n from 'i18n-js';

import en from 'assets/locales/en.json';
import ru from 'assets/locales/ru.json';
import { getDeviceLanguage } from 'utils/getDeviceLanguage';


I18n.locale = getDeviceLanguage();
I18n.translations = { ru, en };
I18n.fallbacks = true;

export const useTranslate = () => {
  return I18n.t;
};
