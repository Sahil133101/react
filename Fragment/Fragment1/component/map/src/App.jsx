import React from "react";
export default function App() {
  let fooditem =["DAL","ROTI","SALAD","MILK"]
  return(
    <React.Fragment>
      
      
   
    <h1> Healthy Food</h1>
    <ul className="list-group">
      {fooditem.map((item)=>(
        <li class ="list-group-item"> {item}
        </li>

      ))}
  
</ul>

   
  


</React.Fragment>
  );
}