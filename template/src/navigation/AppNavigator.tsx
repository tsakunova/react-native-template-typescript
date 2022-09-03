import React,  from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home } from 'features/Home';

import {
  AppRoutes,
  defaultScreenOptions,
} from './constants';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={ defaultScreenOptions }>
      <Stack.Screen
        name={ AppRoutes.HOME }
        component={ Home }
      />
    </Stack.Navigator>
  );
};
