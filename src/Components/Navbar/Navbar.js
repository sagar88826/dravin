import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <>
        <div className='nav-main'>
            <div><img src={process.env.PUBLIC_URL+'/Chat.png'} width="350" alt="accessibility text"/></div>
           <h1>Dravin</h1>
        </div>
        </>
    )
}
export default Navbar;
