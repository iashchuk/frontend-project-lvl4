/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../../routes';

export const addMessageAsync = createAsyncThunk(
  'messages/addMessageAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelMessagesPath(attributes.channelId);
      await axios.post(url, { data: { attributes } });
      return attributes;
    } catch (error) {
      return rejectWithValue(error.message || "Message wasn't added. Server error");
    }
  },
);
