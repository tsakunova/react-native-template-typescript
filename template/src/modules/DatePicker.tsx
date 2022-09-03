import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import NativeDatePicker from 'react-native-date-picker';
import noop from 'lodash/noop';
import moment from 'moment';

import { store } from 'store';


export const DatePicker: FC = observer(
  () => {
    const {
      date = new Date(),
      maxDate = moment().add(90, 'years').toDate(),
      minDate = moment().subtract(90, 'years').toDate(),
      mode = 'datetime',
      onSubmit = noop,
    } = store.datePickerConfig;

    return (
      <NativeDatePicker
        modal
        mode={ mode }
        open={ store.isDatePickerVisible }
        date={ date }
        minimumDate={ minDate }
        maximumDate={ maxDate }
        onDateChange={ noop }
        onConfirm={ (date) => {
          onSubmit(date);
          store.hideDatePicker();
        } }
        onCancel={ () => store.hideDatePicker() }
      />
    );
  }
);
