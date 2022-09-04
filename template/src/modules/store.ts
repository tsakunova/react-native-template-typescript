import { action, observable } from 'mobx';
import { TStyle } from 'react-native-modalize/lib/options';

type DatePickerConfig = Partial<{
  date: Date,
  maxDate: Date,
  minDate: Date,
  mode: 'date' | 'time' | 'datetime',
  onSubmit: (data: Date) => void,
}>;

type BottomSheetConfig = Partial<{
  renderContent: () => React.ReactNode,
  withHandle?: boolean,
  withSafeArea?: boolean,
  cancellable?: boolean,
  handlePosition?: 'outside' | 'inside',
  modalStyle?: TStyle
}>;

export const modules = observable({
  isDatePickerVisible: false,
  isBottomSheetVisible: false,
  isLoadingOverlayVisible: false,
  datePickerConfig: {} as DatePickerConfig,
  bottomSheetConfig: {} as BottomSheetConfig,
  
  showLoadingOverlay() {
    this.isLoadingOverlayVisible = true;
  },

  hideLoadingOverlay() {
    this.isLoadingOverlayVisible = false;
  },

  showDatePicker(config: DatePickerConfig) {
    this.isDatePickerVisible = true;
    this.datePickerConfig = config;
  },

  hideDatePicker() {
    this.isDatePickerVisible = false;
    this.datePickerConfig = {};
  },

  showBottomSheet(config: BottomSheetConfig) {
    const show = () => {
      this.isBottomSheetVisible = true;
      this.bottomSheetConfig = config;
    };

    if (this.isBottomSheetVisible) {
      this.hideBottomSheet();
      setTimeout(show, 500);
    } else {
      show();
    }
  },

  hideBottomSheet() {
    this.isBottomSheetVisible = false;
    // NOTE setTimeout need to wait BottomSheet animation
    setTimeout(action(() => (this.bottomSheetConfig = {})), 100);
  },
});
