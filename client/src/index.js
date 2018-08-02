import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./Ducks/store";


ReactDOM.render(
    
      <Router>
        <App />
      </Router>
    ,
    document.getElementById("root")
  );
