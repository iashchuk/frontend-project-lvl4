/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addMessageAsync } from './thunks/addMessageAsync';
import { removeChannelAsync } from '../channels/thunks/removeChannelAsync';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    setMessages(state, { payload }) {
      state.list = payload;
    },
    addMessage(state, { payload }) {
      state.list.push(payload);
    },
  },
  extraReducers: {
    [addMessageAsync.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [removeChannelAsync.fulfilled]: (state, { payload }) => {
      state.list = state.list.filter((item) => item.channelId !== payload.id);
    },
  },
});

const { actions, reducer } = messagesSlice;

export { actions, reducer };
