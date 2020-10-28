/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import thunks from '../thunks';

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
    [thunks.addMessageAsync.rejected]: (state, { payload }) => {
      state.addMessage = payload;
    },
    [thunks.addChannelAsync.rejected]: (state, { payload }) => {
      state.addChannel = payload;
    },
    [thunks.renameChannelAsync.rejected]: (state, { payload }) => {
      state.renameChannel = payload;
    },
    [thunks.removeChannelAsync.rejected]: (state, { payload }) => {
      state.removeChannel = payload;
    },
  },

});

const { actions, reducer } = errorsSlice;

export { actions, reducer };
