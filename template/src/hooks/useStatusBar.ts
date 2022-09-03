import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'react-native';

//NOTE: StatusBar works like stack so always we need to delete current task (changing StatusBar style) from there
export const useStatusBar = (statusBarProp: StatusBarProps) => {
  useFocusEffect(() => {
    const statusBarStyle = StatusBar.pushStackEntry(statusBarProp);

    return () => {
      StatusBar.popStackEntry(statusBarStyle);
    };
  });
};
