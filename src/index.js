import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/shared/Main.js';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister(); 