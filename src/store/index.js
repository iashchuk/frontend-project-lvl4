import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';

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
