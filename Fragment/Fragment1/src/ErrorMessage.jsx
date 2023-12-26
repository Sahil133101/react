import "./App.css";
export default function ErrorMessage ({items}){

//      let FoodItem = ["Dal", "Roti", "Vegetables","Milk","Salad"];
// //    let FoodItem = [];
    return (
        <>

{items.length == 0  ? <h3 className="Error"> I am Still Hunger </h3> : null}
        </>
    );
}