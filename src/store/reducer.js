import { combineReducers } from '@reduxjs/toolkit';
import { reducer as channels } from './channels/slice';
import { reducer as messages } from './messages/slice';
import { reducer as errors } from './errors/slice';

const rootReducer = combineReducers({
  channels,
  messages,
  errors,
});

export default rootReducer;
