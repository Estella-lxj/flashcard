import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function Card({ frontSide, backSide }) {
  const [side, setSide] = useState(frontSide);
  function handleClick() {
    setSide(prevSide => {
      if (prevSide === frontSide) return backSide
      else return frontSide
    })
  }
  const text = (side === frontSide) ? "front" : "back";
  const classList = `card-container ${text}`
  return (
    <div
      className={classList}
      onClick={handleClick}
    ><p>{side}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card frontSide="1+1=" backSide="2" />
      </header>
    </div>
  );
}

export default App;
