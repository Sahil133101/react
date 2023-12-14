import Appnane from './Appnane';
import Firstrow from './Firstrow';
import Secondrow from './Secondrow';
import Third from './Third';
import React from 'react';
export default function App (){
  return (
    <center className='TodoContainer'>
        <Appnane/>
       <Firstrow />
  <br />
  <Secondrow />
<br/>
<Third />
</center>
    
  );
  
}