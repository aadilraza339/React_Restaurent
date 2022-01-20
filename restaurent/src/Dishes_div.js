import React from 'react';

function Dishes() {
    let dishes = [{src:"",menu_name:""}]
return(
    <div className="menu__container">
            {dishes.map((dishe)=>(
                <div className="down_div">
                <div className="first_down_div">

                    <img 
                    src={dishe.src}
                    alt="food-plaza"
                    className="down_img"/>
                    </div>
                    <div className="manu_span"> {dishe.manu_name} </div>
                </div>
            ))}
        </div>
    )
}
export default Dishes;











