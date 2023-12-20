// /src/Item.jsx
import React from 'react';

import "./App.css";


export default function Item({ FoodItem }) {

  const HandleClick = (event) => {
    console.log(event);
    console.log(`${FoodItem} 
      "Bought`);

  }
  return (
    
  <>
  <li className= "list-group-item" > <span> {FoodItem} </span>
  <button className= "btn btn-primary" onClick= {(event) => HandleClick}> Buy</button>
  </li>
 
  </>






  
      
    
  );
}
