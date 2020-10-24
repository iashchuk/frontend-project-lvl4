/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../../routes';

export const addMessageAsync = createAsyncThunk(
  'messages/addMessageAsync',
  async (attributes) => {
    try {
      const url = routes.channelMessagesPath(attributes.channelId);
      await axios.post(url, { data: { attributes } });
    } catch (error) {
      console.log(error);
    }
  },
);
