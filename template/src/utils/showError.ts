import { Alert } from 'react-native';


type AnyError = Error & {[key: string]: any };

export const showError = (error: AnyError) => {
  Alert.alert('Something goes wrong', error.message);
};
