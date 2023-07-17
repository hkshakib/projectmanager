import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import RootReducer from './Store/Reducers/RootReducer';

import { Provider } from 'react-redux';

const Store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
reportWebVitals();
