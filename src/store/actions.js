import { actions as channels } from './channels/slice';
import { actions as messages } from './messages/slice';
import { actions as errors } from './errors/slice';

const actions = {
  ...channels,
  ...messages,
  ...errors,
};

export default actions;
