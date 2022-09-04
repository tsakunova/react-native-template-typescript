import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Welcome = observer(() => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Template</Text>
    </View>
  );
});
