import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider, } from 'react-redux';
import root from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(root,compose(applyMiddleware(thunk)));
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);