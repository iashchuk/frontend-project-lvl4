/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import thunks from '../thunks';

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
  extraReducers: {
    [thunks.removeChannelAsync.fulfilled]: (state, { payload }) => {
      state.list = state.list.filter((item) => item.channelId !== payload.id);
    },
  },
});

const { actions, reducer } = messagesSlice;

export { actions, reducer };
