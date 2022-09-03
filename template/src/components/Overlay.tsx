import React from 'react';
import { View, StyleSheet } from 'react-native';
import hexToRgba from 'hex-to-rgba';

import { Color } from 'styles/colors';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: hexToRgba(Color.BLACK, 0.3),
  },
});

export const Overlay: React.FC<{
  disabled?: boolean;
  // TODO fix children types
  children: JSX.Element;
}> = ({
  disabled = false,
  children,
}) => {
  return disabled ? children : (
    <View style={ styles.container }>
      { children }
    </View>
  );
};
