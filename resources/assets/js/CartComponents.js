import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/allReducers';
import CartBtn from './components/CartBtn';
import CartPopup from './components/CartPopup';

const store = creatStore(allReducers);

ReactDOM.render(<CartBtn />, document.getElementsById('CartBtnRoot'));
ReactDOM.render(<CartPopup />, document.getElementById('CartPopupRoot'));
