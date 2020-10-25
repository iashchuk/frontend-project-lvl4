/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import selectors from '../../store/selectors';

export const getChannelMessages = createSelector(
  [selectors.getMessages, selectors.getCurrentChannelId],
  (messages, currentChannel) => messages.filter(({ channelId }) => channelId === currentChannel),
);
