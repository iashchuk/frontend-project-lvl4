/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';
import selectors from '../../store/selectors';

export const getModalErrors = createSelector(
  [selectors.getRenameChannelError, selectors.getRemoveChannelError], (renameErr, removeErr) => ({
    renameChannel: renameErr?.message,
    removeChannel: removeErr?.message,
  }),
);
