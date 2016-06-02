import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/user/:userId" component={App} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('main'));
