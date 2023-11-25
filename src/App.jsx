import Appnane from './component/Appnane';
import Firstrow from './component/Firstrow';
import Secondrow from './component/Secondrow';
import Third from './component/Third';
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