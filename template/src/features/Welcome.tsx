import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';


export const Welcome = observer(() => {
  return (
      <View>
        <Text>Welcome Screen</Text>
      </View>
  );
});
