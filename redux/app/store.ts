/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'redux',
  storage,
  whitelist: [],
};

const combinedReducer = combineReducers({});

const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const saveToSessionStorage =
  ({ getState }: any) =>
  (next: any) =>
  (action: any) => {
    const returnValue = next(action);
    const state: any = getState();
    const whitelist = ['_persist'];
    const filteredState = whitelist.reduce((acc: any, key: any) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        acc[key] = state[key];
      }
      return acc;
    }, {});
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('reduxState', JSON.stringify(filteredState));
    }
    return returnValue;
  };

const makeStore = () => {
  const preloadedState = loadFromSessionStorage();
  return configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), saveToSessionStorage],
    preloadedState,
  });
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});

const store = makeStore();
const persistor = persistStore(store);

if (typeof window !== 'undefined') {
  window.onbeforeunload = () => {
    sessionStorage.removeItem('reduxState');
  };
}

if (typeof window !== 'undefined') {
  // Refetch slice if status === failed
  window.onload = () => {};
}

export { persistor, store };
