import React ,{useState} from 'react'
import './VideoMeet.css'
import logo from '../Img/Assets/VideoCallPng.png'

function VideoMeet() {
    const [vid, setvid] = useState(false)
    const changeIcon=()=>{
      setvid(vid == true ? false : true)
      console.log(vid)
    }
    const [mic, setmic] = useState(false)
    const changeIconmic=()=>{
      setmic(mic == true ? false : true)
      
    }
    const [sound, setsound] = useState(false)
    const changeIconsound=()=>{
      setsound(sound == true ? false : true)
      
    }
    return (
        <>
            <div className='video-section'>
                <div className="video-header">
                    <i className="bi bi-play-circle-fill"></i>
                </div>
                <div className="video-footer">
                  
                  <div className="img-illustrator">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="name">
                    <form action="#">
                      <input type="text" name="" id="" placeholder='Name' />
                    </form>
                  </div>
                    <div className='button-section'>
                        <button>Join Meeting</button>
                        <button>Create New Meeting</button>
                    </div>
                    <div className='com-section'>
                        <div onClick={changeIcon}>{vid===true?<i className={`bi bi-camera-video-off`}></i>:<i className={`bi bi-camera-video`}></i>}</div>
                        <div onClick={changeIconmic}>{mic===true?<i className="bi bi-mic-mute"></i>:<i className="bi bi-mic"></i>}</div>
                      <div onClick={changeIconsound}>{sound === true ? <i class="bi bi-volume-mute"></i> : <i class="bi bi-volume-up"></i>} </div>
                    </div>
                </div>
            </div>
        </>
    )
}

<>
</>
export default VideoMeet