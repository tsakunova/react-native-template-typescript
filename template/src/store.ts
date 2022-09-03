import { observable } from 'mobx';

import { modules } from 'modules/store';


export const store = observable({
  ...modules,

  isLoggedIn: false,

  async login() {
    this.isLoggedIn = true;
  },

  async loginSilent() {},

  async logout() {
    this.isLoggedIn = false;
  },
});
