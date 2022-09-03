import React, { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';


const styles = StyleSheet.create({
  bold: {
    fontWeight: '900',
  },
});
export const B: FC<TextProps> = ({ style, ...props }) => (
  <Text
    { ...props }
    style={ [styles.bold, style] }
  />
);
