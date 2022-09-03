import React from 'react';
import {
  TouchableOpacity, StyleProp, ViewStyle, StyleSheet, Text, TextStyle
} from 'react-native';
import noop from 'lodash/noop';

import { font } from 'styles/font';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font.size(16, 24).REGULAR.BLACK,
  },
  disabled: {
    opacity: 0.3,
  },
});

export const TextButton: React.FC<{
  title: string,
  disabled?: boolean,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress: () => void
}> = ({
  title,
  disabled,
  containerStyle,
  textStyle,
  onPress = noop,
}) => {
  return (
    <TouchableOpacity
      disabled={ disabled }
      style={ [
        styles.container,
        disabled && styles.disabled,
        containerStyle
      ] }
      hitSlop={{
        top: 15,
        bottom: 15,
        left: 15,
        right: 15,
      }}
      onPress={ onPress }
    >
      <Text style={ [styles.title, textStyle] }>{ title }</Text>
    </TouchableOpacity>
  );
};
