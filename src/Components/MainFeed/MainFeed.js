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
                        <div className="box-footer"></div>
                    </div>
                    {/* creating more posts */}
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <figure><img src={avatar} alt="avatar" /></figure>
                            <p>Dillon Nair</p>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div className="box-content">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="box-footer"></div>
                    </div>
                    {/* posts end here */}
                </div>
                <div className="tile-2">
                    <div className="tile-2-child">
                        <div className="side-box"></div>
                        <div className="side-box"></div>
                        <div className="side-box"></div>
                        <div className="side-box"></div>
                        <div className="side-box"></div>
                        <div className="side-box"></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MainFeed