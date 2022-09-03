import React from 'react';
import {
  Text, StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle
} from 'react-native';

import { Color } from 'styles/colors';
import { font } from 'styles/font';


const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font.size(16, 22).BOLD.WHITE,
  },
  disabled: {
    opacity: 0.2,
  },
});


export const PrimaryButton: React.FC<TouchableOpacityProps & {
  title: string,
  disabled?: boolean,
  containerStyle?: StyleProp<ViewStyle>
}> = ({
  title,
  disabled,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      { ...props }
      disabled={ disabled }
      style={ [
        styles.container,
        containerStyle,
        disabled && styles.disabled
      ] }
    >
      <Text style={ styles.title }>{ title }</Text>
    </TouchableOpacity>
  );
};
