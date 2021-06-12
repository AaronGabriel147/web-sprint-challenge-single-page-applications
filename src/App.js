import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";



function App() {


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Form />
      <Confirmation />

    </>
  );
};
export default App;
