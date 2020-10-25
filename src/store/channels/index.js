/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addChannelAsync } from './thunks/addChannelAsync';
import { renameChannelAsync } from './thunks/renameChannelAsync';
import { removeChannelAsync } from './thunks/removeChannelAsync';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    list: [],
    error: null,
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
    [addChannelAsync.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [renameChannelAsync.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [removeChannelAsync.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const { actions, reducer } = channelsSlice;

export { actions, reducer };
