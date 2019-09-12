import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LoginPage from './LoginPage/LoginPage';
import App from './App';

ReactDOM.render(<Router>

    <div>
        <Route path="/" exact component={ App }/>
        <Route path="/login" exact component={ LoginPage }/>
    </div>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
