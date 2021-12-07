// https://github.com/vercel/next.js/tree/canary/examples/with-redux
import { isBrowser } from './../shared';
import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;
let composeEnhancer;

const initialState = {};

if (isBrowser() && process.env.NEXT_PUBLIC_ENV === 'dev') {
  composeEnhancer = composeWithDevTools;
} else {
  composeEnhancer = compose;
}
