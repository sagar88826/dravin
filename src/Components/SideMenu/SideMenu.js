import React, { useState } from 'react'
// eslint-disable-next-line
import sideMenu from './sideMenu.css'
import logo from '../Img/logo.gif'
import home from '../Img/sideBar/home.png'
import video from '../Img/sideBar/video.png'
import chat from '../Img/sideBar/chat.png'
import avatar from '../Img/sideBar/avatar.jpg'





/** 
 * 
 * @author: vishal
 * @feature: Adds Side Menu
 */

export default function SideMenu(props) {
    
    

    const [inactive, setinactive] = useState(false)

  return (
    
    <div className={`side-menu setTop-${props.theme} ${!inactive ? "inactive" : "" }`}>
        {/* top Section */}
        <div className="top-section">
            <div className='logo'>
                <img src={logo} alt="logo does not load" />
            </div>
            <div onClick={() => setinactive(!inactive)} className={`toggle-btn ${props.theme}`}>
            {!inactive ?  <i className="bi bi-arrow-right-circle-fill"></i> :  <i className="bi bi-arrow-left-circle-fill"></i>}
            </div>
        </div>
        {/* Divider  */}
        <div className="Divider"></div>
        {/* Menu Bar  */}
        <div className="main-menu">
            <ul>
                <li>
                    <div className="home-icon">
                       
                       <img src={home} alt="img" />
                      
                    </div>
                   <h4 className={`menu-name ${props.theme}`}>Home</h4>
                   
                </li>
            </ul>
        </div>
        <div className="main-menu">
            <ul>
                <li>
                    <div className="home-icon">
                       
                       <img src={video} alt="img" />

                    </div>
                    <h4 className={`menu-name ${props.theme}`}>Video Call</h4>
                   
                </li>
            </ul>
        </div>
        <div className="main-menu">
            <ul>
                <li>
                    <div className="home-icon">
                       
                       <img src={chat} alt="img" />

                    </div>
                    <h4 className={`menu-name ${props.theme}`}>Chat</h4>
                   
                </li>
            </ul>
        </div>
        {/* Footer For Login Icon */}
    <div className={`sidebar-footer ${props.theme}`}>
        <div className="avatar">
           <img src={avatar} alt="" />
        </div>
        <div className={`user-info ${props.theme}`}>
           <h5>Dillin Nair</h5>
           <p>Dillinnair@gmail.com</p>
           </div>
        
        </div>
      
    </div>
  )
}
