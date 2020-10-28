/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import thunks from '../thunks';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    list: [],
  },
  reducers: {
    setChannels(state, { payload }) {
      state.list = payload;
    },
    setCurrentChannelId(state, { payload }) {
      state.currentChannelId = payload;
    },
    addChannel(state, { payload }) {
      state.list.push(payload);
    },
    renameChannel(state, { payload }) {
      state.list = state.list.map((item) => (item.id === payload.id ? payload : item));
    },
    removeChannel(state, { payload }) {
      state.list = state.list.filter((item) => item.id !== payload);
    },
  },
  extraReducers: {
    [thunks.removeChannelAsync.fulfilled]: (state) => {
      const [firstChannelInList] = state.list;
      state.currentChannelId = firstChannelInList.id;
    },
  },
});

const { actions, reducer } = channelsSlice;

export { actions, reducer };
