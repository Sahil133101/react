import React from "react";
export default function App() {
  let fooditem =["DAL","ROTI","SALAD","MILK" ,"GHEE"]
  return(
    <React.Fragment>
      
      
   
    <h1> Healthy Food</h1>
    <ul className="list-group">
      {fooditem.map((item)=>(
        <li key={item }className ="list-group-item"> {item}
        </li>

      ))}
  
</ul>

   
  


</React.Fragment>
  );
}