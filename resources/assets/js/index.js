import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './components/CartBtn';
import CartPopup from './components/CartPopup';

const store = creatStore(allReducers);

document.getElementsById('CartBtnRoot');

ReactDOM.render(<CartBtn />, CartBtnRoot);
