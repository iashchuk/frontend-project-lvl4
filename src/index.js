import 'core-js/stable';
import 'regenerator-runtime/runtime';
import gon from 'gon';

import runApp from './init';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

runApp(gon);
