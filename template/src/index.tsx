import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { ACTIVE_OPACITY } from 'styles/constants';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'features/Home';
import { AppRoutes, defaultScreenOptions } from './constants';
import { Color } from 'styles/colors';

DefaultTheme.colors.background = Color.WHITE;

// @ts-ignore
// NOTE defaultProps is't work with styles
TouchableOpacity.defaultProps = {
  // @ts-ignore
  ...TouchableOpacity.defaultProps,
  activeOpacity: ACTIVE_OPACITY,
};

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ defaultScreenOptions } >
        <Stack.Screen
          name={ AppRoutes.HOME }
          component={ Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
