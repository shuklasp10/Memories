import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider, } from 'react-redux';
import root from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google';

const store = createStore(root,compose(applyMiddleware(thunk)));
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <GoogleOAuthProvider clientId='927468423265-tfp5a53e37lhi7295eia0nlf7696en6f.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);