import React from "react";
import Fooditem from "./Fooditem";
import ErrorMessage from "./ErrorMessage";
import './App.css';
import Container from "./Container";
import FoodInput from "./FoodInput";

export default function App() {

    let FoodItem = ["Dal", "Roti", "Vegetables","Milk","Salad"];
   
  


  return(
    <React.Fragment>
<Container> 
      <div className="Container"> 
      
      <FoodInput> </FoodInput>
      
   
   
    <ErrorMessage  items ={FoodItem}> </ErrorMessage>
   
      <Fooditem items ={FoodItem}> </Fooditem>
  {/* <li class="list-group-item"><h4> DAL</h4></li> */}

  </div>

  </Container>
  


   
  


</React.Fragment>
  );
}