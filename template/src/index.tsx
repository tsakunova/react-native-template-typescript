import React, { StrictMode } from 'react';
import { LogBox, StatusBar, TouchableOpacity } from 'react-native';
import { ACTIVE_OPACITY } from 'styles/constants';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

import { Color } from 'styles/colors';
import { LoginNavigator } from 'navigation/LoginNavigator';
import { AppNavigator } from 'navigation/AppNavigator';
import { BottomSheet } from 'modules/BottomSheet';
import { DatePicker } from 'modules/DatePicker';
import { LoadingOverlay } from 'modules/LoadingOverlay';
import { store } from 'store';


LogBox.ignoreAllLogs(true);

DefaultTheme.colors.background = Color.WHITE;

// @ts-ignore
// NOTE defaultProps is't work with styles
TouchableOpacity.defaultProps = {
  // @ts-ignore
  ...TouchableOpacity.defaultProps,
  activeOpacity: ACTIVE_OPACITY,
};


export const App = observer(
  () => {
    // useOnMount(
    //   //NOTE we check if the user is authorized or isn't by api's request (getUser)
    // );

    return (
      <StrictMode>
        <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar barStyle='dark-content'/>
              {
                !store.isLoggedIn
                  ? <LoginNavigator />
                  : <AppNavigator />
              }
              <BottomSheet />
              <DatePicker />
              <LoadingOverlay />
            </NavigationContainer>
        </SafeAreaProvider>
      </StrictMode>
    );
  }
);
