import store from './store';
import actions from './store/actions';

const initStore = ({ channels, currentChannelId, messages }) => {
  store.dispatch(actions.setChannels(channels));
  store.dispatch(actions.setMessages(messages));
  store.dispatch(actions.setCurrentChannelId(currentChannelId));
};

export default initStore;
