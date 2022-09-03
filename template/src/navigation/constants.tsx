import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

import { BackButton } from 'components/Buttons/BackButton';
import { DEFAULT_MARGIN } from 'styles/constants';


export enum AppRoutes {
  WELCOME = 'WELCOME',
  HOME = 'HOME',
}


export const defaultScreenOptions: StackNavigationOptions = {
  headerTitle: () => null,
  headerLeft: ({ canGoBack }) => canGoBack && <BackButton />,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerLeftContainerStyle: {
    paddingLeft: DEFAULT_MARGIN,
  },
  headerRightContainerStyle: {
    paddingRight: DEFAULT_MARGIN,
  },
};


export const withoutHeader: StackNavigationOptions = {
  headerShown: false,
};
