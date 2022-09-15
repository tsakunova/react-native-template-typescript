import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ArrowLeft } from 'assets/icons';
import { Color } from 'styles/colors';


import { IconButton } from './IconButton';


const styles = StyleSheet.create({
  container: {
    paddingRight: 1,
  },
});

export const BackButton: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <IconButton
      containerStyle={ styles.container }
      onPress={ goBack }
    >
      <ArrowLeft color={ Color.BLACK } />
    </IconButton>
  );
};
