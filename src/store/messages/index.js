/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    setMessages(state, action) {
      state.list = action.payload;
    },
    addMessage(state, action) {
      state.list.push(action.payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export { actions, reducer };
