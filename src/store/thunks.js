import channels from './channels/thunks';
import messages from './messages/thunks';

const thunks = {
  ...channels,
  ...messages,
};

export default thunks;
