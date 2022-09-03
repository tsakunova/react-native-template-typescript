import React, { FC, useCallback, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Modalize } from 'react-native-modalize';
import { ScrollViewProps, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { store } from 'store';
import { DEFAULT_MARGIN } from 'styles/constants';


const styles = StyleSheet.create({
  modal: {
    borderRadius: 12,
    paddingTop: 12,
    height: '10%',
  },
});

const scrollViewProps: ScrollViewProps = {
  bounces: false,
  keyboardShouldPersistTaps: 'always',
};

export const BottomSheet: FC = observer(
  () => {
    const modalRef = useRef<Modalize>();
    const { bottom } = useSafeAreaInsets();

    const {
      renderContent = () => null,
      withHandle = true,
      withSafeArea = true,
      cancellable = true,
      modalStyle,
      handlePosition,
    } = store.bottomSheetConfig;

    const hide = useCallback(
      () => store.hideBottomSheet(),
      []
    );

    useEffect(
      () => {
        modalRef.current?.[store.isBottomSheetVisible ? 'open' : 'close']();
      },
      [store.isBottomSheetVisible]
    );

    const content = withSafeArea
      ? (
        <View style={{ paddingBottom: bottom || DEFAULT_MARGIN }}>
          { renderContent() }
        </View>
      )
      : renderContent();

    return (
      <Modalize
        ref={ modalRef }
        withHandle={ withHandle }
        closeOnOverlayTap={ cancellable }
        panGestureEnabled={ cancellable }
        adjustToContentHeight
        disableScrollIfPossible
        scrollViewProps={ scrollViewProps }
        modalStyle={ [styles.modal, modalStyle] }
        handlePosition={ handlePosition }
        onClosed={ hide }
      >
        { content }
      </Modalize>

    );
  }
);
