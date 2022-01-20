import React from 'react';
import Header from './header';
import Dishes from './Dishes_div';
import Array0f_Dishes from './Array0f_Dishes';

console.log(Array0f_Dishes[2].imgsrc);
function App(params) {
return(
  <>
  <Header />
<img className="main_img" src="https://wallpaperaccess.com/full/3014609.jpg" />
  <Dishes imgsrc={Array0f_Dishes[0].imgsrc}
  manu_name={Array0f_Dishes[0].manu_name}
   />
    <Dishes imgsrc={Array0f_Dishes[1].imgsrc}
  manu_name={Array0f_Dishes[1].manu_name}
   />
    <Dishes imgsrc={Array0f_Dishes[2].imgsrc}
  manu_name={Array0f_Dishes[2].manu_name}
   />




  </>)
}
export default App;




















