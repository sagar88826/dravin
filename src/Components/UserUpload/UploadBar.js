import React from 'react'
import './UploadBar.css'
import img from '../Img/sideBar/avatar.jpg'
export default function UploadBar() {
  return (
    <>
    <div className="mainUB">
        <div className="UB">
            <figure className='userImg'><img src={img} alt="avatar" /></figure>
        </div>
        <div className='post-area'>
            <form action="#">
                <input id='text-input' type="text" placeholder='Type here something...'/>
                <i class="bi bi-image"></i>
                <button id='post-button'>Post</button>                   
            </form>
        </div>
    </div>
    </>
  )
}
