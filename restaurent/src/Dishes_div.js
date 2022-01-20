import React from 'react';

function Dishes(props) {
return(<>

<div className="down_div">
<div className="first_down_div">

    <img 
    src={props.imgsrc}
    alt="food-plaza"
    className="down_img"/>
    </div>
    <div className="manu_span"> {props.manu_name} </div>
</div>

</>
    )
}
export default Dishes;











