// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import runApp from './init';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

runApp();
