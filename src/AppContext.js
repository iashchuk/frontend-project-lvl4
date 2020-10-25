import React from 'react';

const initialValues = {
  nickname: '',
};

const AppContext = React.createContext(initialValues);

export default AppContext;
