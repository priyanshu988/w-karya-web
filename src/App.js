import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Signupuser from './components/Signupuser.js';
import Signupcomp from './components/Signupcomp';
import "bootstrap/dist/css/bootstrap.css";
import Loginuser from './components/Loginuser';
import Logincomp from './components/Logincomp';
import Footer from './Footer.js';




function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/home">
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

      <Route path="/usersignup">
        <Signupuser />
      </Route>

      <Route path="/compsignup">
        <Signupcomp />
      </Route>

      <Route path="/usersignin">
        <Loginuser />
      </Route>

      <Route path="/compsignin">
        <Logincomp />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
