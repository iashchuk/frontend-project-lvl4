/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    list: [],
  },
  reducers: {
    setChannels(state, action) {
      state.list = action.payload;
    },
    setCurrentChannelId(state, action) {
      state.currentChannelId = action.payload;
    },
  },
});

const { actions, reducer } = channelsSlice;

export { actions, reducer };
