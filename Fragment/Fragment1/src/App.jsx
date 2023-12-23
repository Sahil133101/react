import React, { useState } from "react";
import Fooditem from "./Fooditem";
import ErrorMessage from "./ErrorMessage";
import './App.css';
import Container from "./Container";
import FoodInput from "./FoodInput";

export default function App() {
  const FoodItem = ["Dal", "Roti", "Vegetables", "Milk", "Salad"];

  const [textShow, setTextsState] = useState("food item Entered By user");

  const handleInputChange = (enteredText) => {
    setTextsState(enteredText);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="Container">
          <FoodInput onInputChange={handleInputChange} />
          <p>{textShow}</p>
          <ErrorMessage items={FoodItem}></ErrorMessage>
          <Fooditem items={FoodItem}></Fooditem>
        </div>
      </Container>
    </React.Fragment>
  );
}
