import Item from "./Item";

export default function Fooditem({items}){

//      let FoodItems = ["Dal", "Roti", "Vegetables","Milk","Salad"];
// //    let FoodItems = [];
    return (
        < div className="Item2">
         <ul className="list-group">
          
        {
            items.map((xyz) => (
              <Item key = {xyz} FoodItem = {xyz}> handleBuyButton = {()=> console.log(`${items} "bought" `)} </Item>
    
            ))
          }
          </ul>
        </ div >
    );
}