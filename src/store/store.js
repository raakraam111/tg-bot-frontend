import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { loadState, saveState } from './localStorage';

import { ChangeUser } from './slices/userSlice';
import loadingReducer from './slices/loadingSlice';

const persistedState = loadState();

const reducerStore = combineReducers({ 
  'ChangeUser': ChangeUser.reducer,
  'loading': loadingReducer
})

export const store = configureStore({
  reducer: reducerStore,
  preloadedState: persistedState
});

store.subscribe(()=>{
  saveState(store.getState())
})