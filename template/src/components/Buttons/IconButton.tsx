import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import noop from 'lodash/noop';

import { Color } from 'styles/colors';


const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: Color.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const IconButton: React.FC<{
  children: React.ReactNode,
  containerStyle?: StyleProp<ViewStyle>,
  onPress: () => void
}> = ({
  children,
  containerStyle,
  onPress = noop,
}) => {
  return (
    <TouchableOpacity
      style={ [styles.container, containerStyle] }
      hitSlop={{
        top: 15,
        bottom: 15,
        left: 15,
        right: 15,
      }}
      onPress={ onPress }
    >
      { children }
    </TouchableOpacity>
  );
};
