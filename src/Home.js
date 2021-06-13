import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Pizza from "./components/Pizza";
// import Home from "./components/Home";
// Routing is approx a 4 step process. 
// Index.js needs an import and the 'App" to be wrapped in BrowserRouter. 
// Then you need to import Link and Route in the App.js file. 
// Then you need to add the Link and Route lines to the JSX, as seen below..


function Home() {


  return (
    <>
      <h1>Pizza Header</h1>
      {/* Route Links */}
      <nav>
          <Link to="/" id="order-pizza">Home</Link>
          <Link to="/Pizza">Pizza</Link>
      </nav>
      {/* Routing to other components. */}
      {/* <Route exact path="/" component={Home} />  */}
      <Route eact path="/Pizza" component={Pizza} />
    </>
  );
};
export default Home;
