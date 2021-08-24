import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './reducer';
const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

document.addEventListener('click', (e) => {
  if (e.target.nodeName == 'LI') {
    if (e.target.style.textDecoration == 'line-through')
      e.target.style.textDecoration = 'none'
    else e.target.style.textDecoration = 'line-through'
  }
})