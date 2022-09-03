import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';


export const useLayout = (screenOptions: StackNavigationOptions, dependencies: any[] = []) => {
  const { setOptions } = useNavigation();

  useLayoutEffect(
    () => setOptions(screenOptions),
    [setOptions, screenOptions, ...dependencies]
  );
};
