import React from 'react'

import './Navbar.css'
function Navbar(props) {
   var con=true;
const checkCondition=()=>{

    if(props.mode==='dark'){
        con=true;
    }
    else{
        con=false;
    }
}
    return (
        <>
            <div className={`nav-main set-${props.mode}`}>
                <h1 className='nav-heading'>Dravin</h1>
                <div className="toggle-mode" onClick={props.changeMode}>
                    {con?<i class="bi bi-sun-fill"></i>:<i class="bi bi-moon-fill"></i>}
                </div>
                
                
            </div>
        </>
    )
}
export default Navbar;

