/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  addChannelAsync,
  renameChannelAsync,
  removeChannelAsync,
} from './channels';
import { addMessageAsync } from './messages';

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {},
  reducers: {
    setError(state, { payload }) {
      state[payload.type] = payload;
    },
    resetError(state, { payload }) {
      state[payload.type] = null;
    },
  },
  extraReducers: {
    [addMessageAsync.rejected]: (state, { payload }) => {
      state.addMessage = payload;
    },
    [addChannelAsync.rejected]: (state, { payload }) => {
      state.addChannel = payload;
    },
    [renameChannelAsync.rejected]: (state, { payload }) => {
      state.renameChannel = payload;
    },
    [removeChannelAsync.rejected]: (state, { payload }) => {
      state.removeChannel = payload;
    },
  },

});

const getAddMessageError = (state) => state.errors.addMessage;
const getAddChannelError = (state) => state.errors.addChannel;
const getRemoveChannelError = (state) => state.errors.removeChannel;
const getRenameChannelError = (state) => state.errors.renameChannel;

export default {
  actions: errorsSlice.actions,
  reducer: errorsSlice.reducer,
  selectors: {
    getAddMessageError,
    getAddChannelError,
    getRemoveChannelError,
    getRenameChannelError,
  },
};
