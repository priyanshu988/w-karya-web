import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import "bootstrap/dist/css/bootstrap.css";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

    </div>
  );
}

export default App;
