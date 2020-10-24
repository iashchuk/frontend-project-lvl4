import * as channels from './channels/selectors';
import * as messages from './messages/selectors';

const selectors = {
  ...channels,
  ...messages,
};

export default selectors;
