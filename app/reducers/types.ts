import {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
  Action,
  AnyAction
} from 'redux';
import { ToolbarState } from './toolbar';
import { WalletState } from './wallet';
export interface StoreState {
  toolbar: ToolbarState;
  wallet: WalletState;
}

export type GetState = () => StoreState;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<StoreState, AnyAction>;
