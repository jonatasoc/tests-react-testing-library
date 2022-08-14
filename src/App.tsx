import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disableButton, setDisableButton] = useState(false);

  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
        disabled={disableButton}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        style={{ display: "block" }}
        checked={disableButton}
        onClick={() => setDisableButton(!disableButton)}
      />
    </div>
  );
}

export default App;
