import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompA from './components.js/compA';
import { Route } from 'react-router-dom';
import MyNavBar from './components.js/navBar';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>


        <Route exact path="/" component={MyNavBar} />
        <Route exact path="/compA" component={CompA} />

      </Router>
    );
  }
}

export default App;
