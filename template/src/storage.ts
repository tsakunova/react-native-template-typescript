import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';


export const TOKEN = 'TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';


////// AsyncStorage
export const removeFromStorage = AsyncStorage.removeItem;

export const writeToStorage = (key: string, data: any) => AsyncStorage
  .setItem(key, JSON.stringify(data));

export const writeStringToStorage = (key: string, data: string) => AsyncStorage
  .setItem(key, data);

export const readFormStorage = <T>(key: string): Promise<T | void> => AsyncStorage
  .getItem(key)
  .then(data => data && JSON.parse(data));

export const mergeItemToStorageItem = (key: string, data: any) => AsyncStorage
  .mergeItem?.(key, JSON.stringify(data));

////// EncryptedStorage
export const removeFromSecureStorage = EncryptedStorage.removeItem;

export const writeToSecureStorage = (key: string, data: any) => EncryptedStorage
  .setItem(key, JSON.stringify(data));

export const readFormSecureStorage = <T>(key: string): Promise<T | void> => EncryptedStorage
  .getItem(key)
  .then(data => data && JSON.parse(data));
