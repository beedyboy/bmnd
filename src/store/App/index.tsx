import { action, makeObservable, observable } from 'mobx';
import { RootStore } from 'store';

export class AppStore {
  rootStore: RootStore;
  menuOpen =  false;

  
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      menuOpen: observable,

      toggleMenu: action.bound
    });
    this.rootStore = rootStore;
  }

  toggleMenu() {
    if (this.menuOpen) {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
     }
  }
 }
