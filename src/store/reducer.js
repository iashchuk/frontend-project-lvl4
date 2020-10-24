import { combineReducers } from '@reduxjs/toolkit';
import { reducer as channels } from './channels';
import { reducer as messages } from './messages';

const rootReducer = combineReducers({
  channels,
  messages,
});

export default rootReducer;
