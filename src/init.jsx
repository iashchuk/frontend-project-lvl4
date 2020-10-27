import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import AppContext from './AppContext';
import getCookiesInfo from './cookies';
import store from './store';
import initStore from './initStore';
import initSockets from './sockets';

import '../assets/application.scss';

export default (gon) => {
  const { nickname } = getCookiesInfo();

  initStore(gon);
  initSockets();

  ReactDOM.render(
    <Provider store={store}>
      <AppContext.Provider value={{ nickname }}>
        <App />
      </AppContext.Provider>

    </Provider>,
    document.getElementById('chat'),
  );
};
