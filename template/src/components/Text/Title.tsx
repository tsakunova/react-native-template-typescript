import React, { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { font } from 'styles/font';


const styles = StyleSheet.create({
  title: {
    ...font.size(24, 34).BOLD.BLACK,
  },
});

export const Title: FC<TextProps> = ({ style, ...props }) => (
  <Text
    numberOfLines={ 1 }
    style={ [styles.title, style] }
    { ...props }
  />
);
