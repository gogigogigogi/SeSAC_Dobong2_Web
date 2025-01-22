import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: reducer });

// state의 초기값은 매개변수의 default 값으로 설정
function reducer(numberState = 1, action) {
  if (action.type === 'increase') {
    return numberState + 1;
  } else if (action.type === 'decrease') {
    return numberState - 1;
  } else {
    return numberState;
  }
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
