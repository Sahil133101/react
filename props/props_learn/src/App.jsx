import Profile1 from './Profile1'
import React from "react";
import XYZ from './XYZ';
export default function App(){
  return (
    <>
<Profile1 text={{name :"hello sahil"}}  />
 {/* data ={{Data :"Btech student"}} */}
<XYZ data ={{Data :"Btech student"}}/>
<XYZ data ={{Data :"from Saharanpur"}}/>
    </>

  );
}