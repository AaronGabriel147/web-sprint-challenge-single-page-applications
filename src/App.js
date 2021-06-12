import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import { Link, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {/* Route Links */}
      <nav>
          <Link to="/">Home</Link>
          <Link to="/Form">Form</Link>
          <Link to="/Confirmation">Confirmation</Link>
      </nav>
      {/* Routing to other components. */}
      <Route exact path="/" component={Home} /> 
      <Route path="/Form" component={Form} />
      <Route path="/Confirmation" component={Confirmation} />
    </>
  );
};
export default App;
