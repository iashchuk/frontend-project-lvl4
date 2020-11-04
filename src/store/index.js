import { configureStore, combineReducers } from '@reduxjs/toolkit';

import channelsSlice from './channels';
import messagesSlice from './messages';
import errorsSlice from './errors';

export const thunks = {
  ...channelsSlice.thunks,
  ...messagesSlice.thunks,
};

export const actions = {
  ...channelsSlice.actions,
  ...messagesSlice.actions,
  ...errorsSlice.actions,
};

export const selectors = {
  ...channelsSlice.selectors,
  ...messagesSlice.selectors,
  ...errorsSlice.selectors,
};

const rootReducer = combineReducers({
  channels: channelsSlice.reducer,
  messages: messagesSlice.reducer,
  errors: errorsSlice.reducer,
});

const initStore = ({ channels, currentChannelId, messages }) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {
      channels: { list: channels, currentChannelId },
      messages: { list: messages },
    },
  });

  return store;
};

export default initStore;
