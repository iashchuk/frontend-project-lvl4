import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import gon from 'gon';

import App from './App';
import AppContext from './AppContext';
import getUserName from './getUserName';
import store from './store';
import actions from './store/actions';

import '../assets/application.scss';

export default () => {
  const nickname = getUserName();

  store.dispatch(actions.setChannels(gon.channels));
  store.dispatch(actions.setMessages(gon.messages));
  store.dispatch(actions.setCurrentChannelId(gon.currentChannelId));

  const socket = io();

  socket.on('newMessage', ({ data }) => store.dispatch(actions.addMessage(data.attributes)));
  socket.on('newChannel', ({ data }) => store.dispatch(actions.addChannel(data.attributes)));
  socket.on('renameChannel', ({ data }) => store.dispatch(actions.renameChannel(data.attributes)));
  socket.on('removeChannel', ({ data }) => store.dispatch(actions.removeChannel(data.id)));

  ReactDOM.render(
    <Provider store={store}>
      <AppContext.Provider value={{ nickname }}>
        <App />
      </AppContext.Provider>

    </Provider>,
    document.getElementById('chat'),
  );
};
