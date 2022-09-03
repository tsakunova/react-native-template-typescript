import { PERMISSIONS, RESULTS, Permission, request } from 'react-native-permissions';
import { Linking, Alert } from 'react-native';

import { isIos } from 'utils/platform';


const { PHOTO_LIBRARY } = PERMISSIONS.IOS;
const { READ_EXTERNAL_STORAGE } = PERMISSIONS.ANDROID;


const alertMessage = {
  [PHOTO_LIBRARY]: 'Gallery not allowed. Allow Gallery access to choose photo',
  [READ_EXTERNAL_STORAGE]: 'Storage not allowed. Allow Storage access to choose photo',
};

export const requestPermission = async (permission: Permission): Promise<boolean> => {
  const result = await request(permission);

  if (result === RESULTS.UNAVAILABLE) {
    Alert.alert('Gallery is unavailable');
  }

  if (result === RESULTS.BLOCKED) {
    Alert.alert(
      '',
      alertMessage[permission],
      [
        {
          text: 'Settings',
          onPress: Linking.openSettings,
        }
      ]
    );
  }

  return result === RESULTS.GRANTED;
};

export const requestGalleryPermissions = async (): Promise<boolean> => requestPermission(isIos ? PHOTO_LIBRARY : READ_EXTERNAL_STORAGE);
