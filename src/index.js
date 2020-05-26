import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import List from "./List";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router basename="habitico">
    <Route exact path="/list" component={List} />
    <Main />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister(); 