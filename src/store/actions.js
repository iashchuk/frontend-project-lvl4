import { actions as channels } from './channels';
import { actions as messages } from './messages';

const actions = {
  ...channels,
  ...messages,
};

export default actions;
