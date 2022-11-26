import React from 'react'
import './MainFeed.css'
import UploadBar from '../UserUpload/UploadBar'
import avatar from '../Img/sideBar/avatar.jpg'

function MainFeed() {
    return (
        <>
            <div className="tile-container">
                <div className='tile-1'>
                    <UploadBar></UploadBar>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer">
                            <i class="bi bi-chat-right"></i>
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-send"></i>
                        </div>
                    </div>
                </div>
                <div className="tile-2">
                    <div className="tile-2-child">
                        <div className="side-box">
                            <div className="sb-header">
                                <p>What's happening?</p>
                            </div>
                            <div className="sb-content"></div>
                        </div>
                        <div className="side-box">
                            <div className="sb-header">
                                <p>News Feed</p>
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