import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-less/semantic.less';
import store from "./Component/store";

const token = localStorage.getItem('token');
if (token){
    store.dispatch({type: "WAIT_FOR_AUTH"});
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
                store.dispatch({type: 'LOGIN_USER', payload: response.user});
            }
        });

}

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
