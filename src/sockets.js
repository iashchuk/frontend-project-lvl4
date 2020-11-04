import io from 'socket.io-client';
import { actions } from './store';

const initSockets = (store) => {
  const socket = io();

  socket.on('newMessage', ({ data }) => store.dispatch(actions.addMessage(data.attributes)));
  socket.on('newChannel', ({ data }) => store.dispatch(actions.addChannel(data.attributes)));
  socket.on('renameChannel', ({ data }) => store.dispatch(actions.renameChannel(data.attributes)));
  socket.on('removeChannel', ({ data }) => store.dispatch(actions.removeChannel(data.id)));
};

export default initSockets;
