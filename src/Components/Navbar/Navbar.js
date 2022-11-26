import React from 'react'

import './Navbar.css'
function Navbar({ toggleButton, theme }) {

    return (
        <>
            {/* <div className={`nav-main set-${theme}`}>
                <h1 className={`nav-heading ${theme}`}>Dravin</h1> */}
               


            {/* </div> */}
            <div className="toggle-mode" onClick={toggleButton} theme={theme} >
                    {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill "></i>}
                </div>
        </>
    )
}
export default Navbar;

