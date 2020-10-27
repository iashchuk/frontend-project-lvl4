import { actions as channels } from './channels/slice';
import { actions as messages } from './messages/slice';

const actions = {
  ...channels,
  ...messages,
};

export default actions;
