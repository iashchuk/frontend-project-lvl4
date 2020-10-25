/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    setMessages(state, { payload }) {
      state.list = payload;
    },
    addMessage(state, { payload }) {
      state.list.push(payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export { actions, reducer };
