import * as channels from './channels/selectors';
import * as messages from './messages/selectors';
import * as errors from './errors/selectors';

const selectors = {
  ...channels,
  ...messages,
  ...errors,
};

export default selectors;
