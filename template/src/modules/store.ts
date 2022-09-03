import { observable } from 'mobx';


export const modules = observable({
  isLoadingOverlayVisible: false,

  showLoadingOverlay() {
    this.isLoadingOverlayVisible = true;
  },

  hideLoadingOverlay() {
    this.isLoadingOverlayVisible = false;
  },
});
