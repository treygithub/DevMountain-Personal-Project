import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import store from "./ducks/store";

ReactDOM.render(
      <Provider store= { store }>
        <Router>
          <App />
        </Router>
      </Provider>
    ,
    document.getElementById("root")
  );
