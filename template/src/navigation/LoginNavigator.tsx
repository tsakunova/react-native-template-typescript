import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Welcome } from 'features/Welcome';

import { AppRoutes, defaultScreenOptions } from './constants';


const Stack = createStackNavigator();

export const LoginNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={ defaultScreenOptions } >
    <Stack.Screen
      name={ AppRoutes.WELCOME }
      component={ Welcome }
    />
  </Stack.Navigator>
);
