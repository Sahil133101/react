// FoodInput.jsx
import React from "react";

export default function FoodInput({ handleKeyDown }) {
 

  return (
    <div className="Item1">
      <center>
        <h1>Healthy Food</h1>
      </center>

      <div className="input">
        <input
          type="text"
            placeholder="Enter food item"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
