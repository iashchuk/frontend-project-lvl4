import { combineReducers } from '@reduxjs/toolkit';
import { reducer as channels } from './channels/slice';
import { reducer as messages } from './messages/slice';

const rootReducer = combineReducers({
  channels,
  messages,
});

export default rootReducer;
