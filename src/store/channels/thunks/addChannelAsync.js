/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../../routes';

export const addChannelAsync = createAsyncThunk(
  'channels/addChannelAsync',
  async (attributes, { rejectWithValue }) => {
    try {
      const url = routes.channelsPath();
      await axios.post(url, { data: { attributes } });
    } catch (error) {
      return rejectWithValue(error.message || "Channel wasn't added. Server error");
    }
  },
);
