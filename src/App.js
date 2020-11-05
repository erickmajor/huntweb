import React, { Component } from 'react';

import "./styles.css";

import Header from "./components/Header";
import Main from "./pages/main";

// Stateless components
const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
