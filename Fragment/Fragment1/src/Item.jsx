// /src/Item.jsx
import React from 'react';

import "./App.css";


export default function Item({ FoodItem , handleBuyButton}) {

  const HandleClick = () => {
    
    console.log(`${FoodItem} 
      "Bought`);

  }
  return (
    
  <>
  <li className= "list-group-item" > <span> {FoodItem} </span>
  <button className= "btn btn-primary" onClick= {HandleClick}> Buy</button>
  </li>
 
  </>






  
      
    
  );
}
