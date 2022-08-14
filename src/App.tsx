import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
