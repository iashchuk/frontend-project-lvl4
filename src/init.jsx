import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import cookies from 'js-cookie';
import faker from 'faker';

import App from './App';
import AppContext from './AppContext';
import initStore from './store';
import initSockets from './sockets';
import initRollbar from './rollbar';

import '../assets/application.scss';

export default (gon) => {
  // eslint-disable-next-line functional/no-let
  let nickname = cookies.get('userName');

  if (!nickname) {
    nickname = faker.name.findName();
    cookies.set('userName', nickname);
  }

  const store = initStore(gon);
  initSockets(store);
  initRollbar();

  ReactDOM.render(
    <Provider store={store}>
      <AppContext.Provider value={{ nickname }}>
        <App />
      </AppContext.Provider>

    </Provider>,
    document.getElementById('chat'),
  );
};
