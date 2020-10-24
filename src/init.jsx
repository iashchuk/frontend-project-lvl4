import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import gon from 'gon';

// import io from 'socket.io-client';
import App from './App';
import UserContext from './UserContext';
import getUserName from './getUserName';
import store from './store';
import actions from './store/actions';

import '../assets/application.scss';

export default () => {
  store.dispatch(actions.setChannels(gon.channels));
  store.dispatch(actions.setMessages(gon.messages));
  store.dispatch(actions.setCurrentChannelId(gon.currentChannelId));

  console.log('it works!');
  console.log('gon', gon);

  const userName = getUserName();

  ReactDOM.render(
    <Provider store={store}>
      <UserContext.Provider value={userName}>
        <App />
      </UserContext.Provider>

    </Provider>,
    document.getElementById('chat'),
  );
};
