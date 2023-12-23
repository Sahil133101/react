// FoodInput.jsx
import React from "react";

export default function FoodInput({ onInputChange }) {
  const handleInputChange = (event) => {
    const enteredText = event.target.value;
    console.log(enteredText);
    onInputChange(enteredText);
  };

  return (
    <div className="Item1">
      <center>
        <h1>Healthy Food</h1>
      </center>

      <div className="input">
        <input
          type="text"
          placeholder="Enter food item"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
