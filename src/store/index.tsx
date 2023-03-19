import { configure } from 'mobx';
import { createContext, useContext } from 'react';
import { AppStore } from './App';
import { AuthStore } from './Auth';


configure({
  enforceActions: 'observed',
  computedRequiresReaction: true
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export class RootStore {
  AppStore: AppStore;
  AuthStore: AuthStore;
  constructor() {
    this.AppStore = new AppStore(this);
    this.AuthStore = new AuthStore(this);
  }
}

export const Stores = new RootStore();

const StoreContext = createContext<RootStore>(Stores);

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
