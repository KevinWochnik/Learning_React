import React, { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showP, setShowP] = useState(false);

  const toggleParagraphHandler = () => {
    setShowP((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showP && <p>This is new</p>}
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
