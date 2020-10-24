import React from 'react';
import ReactDOM from 'react-dom';
import gon from 'gon';

// import io from 'socket.io-client';
import App from './App';
import UserContext from './UserContext';
import getUserName from './getUserName';
import '../assets/application.scss';

export default () => {
  console.log('it works!');
  console.log('gon', gon);

  const userName = getUserName();

  ReactDOM.render(
    <UserContext.Provider value={userName}>
      <App initState={gon} />
    </UserContext.Provider>,
    document.getElementById('chat'),
  );
};
