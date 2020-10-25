import { addChannelAsync } from './addChannelAsync';
import { renameChannelAsync } from './renameChannelAsync';
import { removeChannelAsync } from './removeChannelAsync';

const thunks = {
  addChannelAsync,
  renameChannelAsync,
  removeChannelAsync,
};

export default thunks;
