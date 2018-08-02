import React, { Component } from 'react';
import NavBar from './views/Component/NavBar/NavBar';
import Footer from './views/Component/Footer/Footer';
import './App.css';
import Router2 from './routes'



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
