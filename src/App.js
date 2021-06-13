import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Pizza from "./components/Pizza";
import Home from "./components/Home";
// Routing is approx a 4 step process. 
// Index.js needs an import and the 'App" to be wrapped in BrowserRouter. 
// Then you need to import Link and Route in the App.js file. 
// Then you need to add the Link and Route lines to the JSX, as seen below..


export default function App() {


  return (
    <>
      <h1>Pizza Shop</h1>
      {/* Route Links */}
      <nav>
          <Link to="/">Home</Link>/
          <Link to="/pizza" id="order-pizza">Pizza</Link>
      </nav>
      {/* Routing to other components. */}
      <Route exact path="/" component={Home} /> 
      <Route path="/pizza" component={Pizza} />
    </>
  );
};

