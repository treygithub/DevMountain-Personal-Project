import React, { Component } from 'react';
import NavBar from './views/Component/NavBar/NavBar';
import Footer from './views/Component/Footer/Footer';
import store from './ducks/store';
import Router2 from './routes';
import jwt_decode from 'jwt-decode';
import setAuthToken from './authToken/setAuthToken';
import { setCurrentAdmin } from './ducks/actions/authActions';
import './App.css';

//Checks for token on every page
if(localStorage.jwtToken){
  // Set auth token in header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp of token
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentAdmin(decoded));
}



class App extends Component {
  render() {

    return (
        <div className="App">
          <NavBar/>
          <Router2 />
          <Footer/>
        </div>
    );
  }
}

export default App;
