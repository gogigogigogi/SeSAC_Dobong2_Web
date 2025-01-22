import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. store 설정
// module/index.js 에서 통합한 rootReducer를 value로 전달
const store = configureStore({ reducer: rootReducer });

// const store = configureStore({ reducer: reducer });

// state의 초기값은 매개변수의 default 값으로 설정
// function reducer(numberState = 1, action) {
//   if (action.type === 'increase') {
//     return numberState + 1;
//   } else if (action.type === 'decrease') {
//     return numberState - 1;
//   } else {
//     return numberState;
//   }
// }

// 4. App 컴포넌트 자식 컴포넌트에서 사용 가능하도록
// store props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
