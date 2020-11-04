/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { removeChannelAsync } from './channels';

export const addMessageAsync = createAsyncThunk(
  'messages/addMessageAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelMessagesPath(attributes.channelId);
      await axios.post(url, { data: { attributes } });
      return attributes;
    } catch (error) {
      return rejectWithValue({ type: 'addMessage', message: `Message wasn't added. ${error.message || 'Server error'}. Try again later ` });
    }
  },
);

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
    [removeChannelAsync.fulfilled]: (state, { payload }) => {
      state.list = state.list.filter((item) => item.channelId !== payload.id);
    },
  },
});

const getMessages = (state) => state.messages.list;

export default {
  thunks: { addMessageAsync },
  actions: messagesSlice.actions,
  reducer: messagesSlice.reducer,
  selectors: { getMessages },
};
