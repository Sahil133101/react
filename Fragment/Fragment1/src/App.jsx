import React, { useState } from "react";
import Fooditem from "./Fooditem";
import ErrorMessage from "./ErrorMessage";
import './App.css';
import Container from "./Container";
import FoodInput from "./FoodInput";

export default function App() {
  // const FoodItem = ["Dal", "Roti", "Vegetables", "Milk", "Salad"];

  

  const [FoodItem , setFoodItem] =  useState([]);
  const onKeyDown = (event) => {
     if (event.key== 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItem = [...FoodItem , newFoodItem];
    setFoodItem(newItem);
     }
    
    // console.log(event); 
    // setTextsState(event.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="Container">
          <FoodInput handleKeyDown={onKeyDown} />
          {/* <p>{textShow}</p> */}
          <ErrorMessage items={FoodItem}></ErrorMessage>
          <Fooditem items={FoodItem}></Fooditem>
        </div>
      </Container>
    </React.Fragment>
  );
}
