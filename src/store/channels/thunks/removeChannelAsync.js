/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../../routes';

export const removeChannelAsync = createAsyncThunk(
  'channels/removeChannelAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelPath(attributes.id);
      await axios.delete(url);
      return attributes;
    } catch (error) {
      return rejectWithValue(error.message || "Channel wasn't removed. Server error");
    }
  },
);
