import 'bootstrap/dist/css/bootstrap.css';
export default function Item(){
    // let item1 =["dal ","Roti","milk","salad","vegetables","ghee"]
    let itme1=[];

    return(
       

        <React.Fragment>
      
      
   
        <h1> Healthy Food</h1>
        {item1.length===0 && <h3> I still Hungry</h3>}
        <ul className="list-group">
            {item1.map((item)=>(
                <li key={item} className="list-group-item"> {item} </li>
            ))}


        </ul>
       
      
    
    
    </React.Fragment>

    );

}