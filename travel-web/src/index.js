import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-less/semantic.less'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from "./Component/reducer";

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);

const store = createStoreWithMiddleware(reducer);

const token = localStorage.getItem('token');
if (token){
    fetch('/api/auth/jwt', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"token": token})
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        }).then((response) => {
            if (response) {
                store.dispatch({type: 'LOGIN_USER', payload: response.user})
            }
        });

}

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;
