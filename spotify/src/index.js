/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import stores  from './stores'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  </React.StrictMode>
);


