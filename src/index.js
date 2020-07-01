import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import NewLogin from './newlogin';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
        <Route path="/" component={NewLogin} />
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
