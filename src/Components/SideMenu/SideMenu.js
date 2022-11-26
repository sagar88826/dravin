import React from 'react'
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





    return (

        <div className={`side-menu }`}>
            {/* top Section */}
            <div className="top-section">
                <div className='logo'>
                    <img src={logo} alt="logo does not load" />
                </div>
                <div className="l-name">
                    <p>dravin</p>
                </div>
            </div>
            {/* Divider  */}
            <div className="Divider"></div>
            {/* Menu Bar  */}

            <div className="main-menu">

                <div className="home-icon">

                    <i class="bi bi-house"></i>
                    <h4 className={`menu-name ${props.theme}`}>Home</h4>
                </div>

            </div>
            <div className="main-menu">

                <div className="home-icon">

                    <i class="bi bi-camera-video"></i>
                    <h4 className={`menu-name ${props.theme}`}>Video Call</h4>
                </div>

            </div>
            <div className="main-menu">

                <div className="home-icon">

                    <i class="bi bi-chat-left"></i>
                    <h4 className={`menu-name ${props.theme}`}>Chat</h4>
                </div>

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
