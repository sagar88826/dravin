import React from 'react'
import './UploadBar.css'
import img from '../Img/sideBar/avatar.jpg'
export default function UploadBar(props) {
  return (
    <>
      <div className={`mainUB ${props.theme}`}>
        <div className="UB">
          <figure className='userImg'><img src={img} alt="avatar" /></figure>
        </div>
        <div class="col-3">
          <input class="effect-1" type="text" placeholder='what&#39;s happening?' size={50} />
          <span class="focus-border"></span>
        </div>
        <div className="post-area">
          <i class="bi bi-image"></i>
        </div>
        <div className="post-area">
          <button id='post-button'>Post</button>
        </div>
      </div>
    </>
  )
}
