import { Platform } from 'react-native';


export const platform = Platform.OS;
export const isIos = platform === 'ios';
export const isAndroid = platform === 'android';
