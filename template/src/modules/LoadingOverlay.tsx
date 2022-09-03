import React from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { Overlay } from 'components/Overlay';
import { store } from 'store';


const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export const LoadingOverlay: React.FC = observer(
  () => {
    if (!store.isLoadingOverlayVisible) return null;

    return (
      <Overlay>
        <View/>
      </Overlay>
    );
  }
);
