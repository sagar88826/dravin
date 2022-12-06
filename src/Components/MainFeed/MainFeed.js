import React, { useEffect, useState } from 'react'
import './MainFeed.css'
import UploadBar from '../UserUpload/UploadBar'
import avatar from '../Img/sideBar/avatar.jpg'
import NewsApi from './NewsApi'

function MainFeed(props) {

    return (
        <>

            <div className="tile-container">

                {/* Main Feed is Starts From Here  */}
                <div className='tile-1'>
                    <UploadBar theme={props.theme} />

                    {/* Box For main Feed  */}
                    <div className={`box ${props.theme}`}>
                        <div className={`box-header ${props.theme}`}>
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className={`box-content ${props.theme}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`box-footer ${props.theme}`}>
                            <i className="bi bi-chat-right"></i>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-send"></i>
                        </div>
                    </div>

                    {/* Box Being Repeated  */}
                    <div className={`box ${props.theme}`}>
                        <div className={`box-header ${props.theme}`}>
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i className="bi bi-three-dots"></i>
                        </div>
                        <div className={`box-content ${props.theme}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`box-footer ${props.theme}`}>
                            <i className="bi bi-chat-right"></i>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-send"></i>
                        </div>
                    </div>
                </div>

                {/* Side Box For News and Api Related Work  */}
                <NewsApi theme={props.theme} />

            </div>


        </>
    )
}

export default MainFeed