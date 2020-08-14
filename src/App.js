import React from 'react';
import logo from './logo.svg';
import './App.css';
import MallHeader from "./component/mallHeader/MallHeader";
import IndexBody from "./component/indexBody/indexBody";

function App() {
  return (
    <div className="App">
      <MallHeader />
      <IndexBody />
    </div>
  );
}

export default App;
