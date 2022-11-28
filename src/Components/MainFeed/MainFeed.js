import React from 'react'
import './MainFeed.css'
import UploadBar from '../UserUpload/UploadBar'
import avatar from '../Img/sideBar/avatar.jpg'

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
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className={`box-content ${props.theme}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`box-footer ${props.theme}`}>
                            <i class="bi bi-chat-right"></i>
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-send"></i>
                        </div>
                    </div>

                    {/* Box Being Repeated  */}
                    <div className={`box ${props.theme}`}>
                        <div className={`box-header ${props.theme}`}>
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className={`box-content ${props.theme}`}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={`box-footer ${props.theme}`}>
                            <i class="bi bi-chat-right"></i>
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-send"></i>
                        </div>
                    </div>
                </div>

                {/* Side Box For News and Api Related Work  */}

                <div className="tile-2">
                    <div className="tile-2-child">
                        <div className={`side-box ${props.theme}`}>
                            <div className={`sb-header ${props.theme}`}>
                                <p className={`sb-head ${props.theme}`}>What's happening?</p>
                            </div>
                            <div className="sb-content"></div>
                        </div>
                        <div className={`side-box ${props.theme}`}>
                            <div className={`sb-header ${props.theme}`}>
                                <p className={`sb-head ${props.theme}`}># News Headlines</p>
                            </div>
                            <div className="sb-content"></div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default MainFeed