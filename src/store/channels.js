/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export const addChannelAsync = createAsyncThunk(
  'channels/addChannelAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelsPath();
      await axios.post(url, { data: { attributes } });
      return attributes;
    } catch (error) {
      return rejectWithValue({ type: 'addChannel', message: `Channel wasn't added. ${error.message || 'Server error'}. Try again later ` });
    }
  },
);

export const renameChannelAsync = createAsyncThunk(
  'channels/renameChannelAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelPath(attributes.id);
      await axios.patch(url, { data: { attributes } });
      return attributes;
    } catch (error) {
      return rejectWithValue({ type: 'renameChannel', message: `Channel wasn't renamed. ${error.message || 'Server error'}. Try again later` });
    }
  },
);

export const removeChannelAsync = createAsyncThunk(
  'channels/removeChannelAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelPath(attributes.id);
      await axios.delete(url);
      return attributes;
    } catch (error) {
      return rejectWithValue({ type: 'removeChannel', message: `Channel wasn't removed. ${error.message || 'Server error'}. Try again later` });
    }
  },
);

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
      const channel = state.list.find((item) => item.id === payload.id);
      channel.name = payload.name;
    },
    removeChannel(state, { payload }) {
      const channelIndex = state.list.findIndex((item) => item.id === payload.id);
      state.list.splice(channelIndex, 1);
    },
  },
  extraReducers: {
    [removeChannelAsync.fulfilled]: (state) => {
      const [firstChannelInList] = state.list;
      state.currentChannelId = firstChannelInList.id;
    },
  },
});

const getChannels = (state) => state.channels.list;
const getCurrentChannelId = (state) => state.channels.currentChannelId;

export default {
  thunks: {
    addChannelAsync,
    renameChannelAsync,
    removeChannelAsync,
  },
  actions: channelsSlice.actions,
  reducer: channelsSlice.reducer,
  selectors: {
    getChannels,
    getCurrentChannelId,
  },
};
