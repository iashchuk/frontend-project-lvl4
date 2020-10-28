/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../../routes';

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
