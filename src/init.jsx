import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import App from './App';
import '../assets/application.scss';

export default () => {
  console.log('it works!');
  console.log('gon', gon);

  ReactDOM.render(
    <App />,
    document.getElementById('chat'),
  );
};
