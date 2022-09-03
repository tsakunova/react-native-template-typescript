import { NativeModules } from 'react-native';

import { isIos } from './platform';


const { SettingsManager, I18nManager } = NativeModules;

export const getDeviceLanguage = () => {
  const deviceLocale = isIos
    ? SettingsManager.settings.AppleLocale || SettingsManager.settings.AppleLanguages[0] //NOTE iOS 13 hack
    : I18nManager.localeIdentifier;

  return deviceLocale?.split('_')?.[0]?.toLowerCase() || 'ru';
};
