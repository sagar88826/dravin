import './App.css';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode } from './Components/SideMenu/useDarkMode.js'
import MainFeed from './Components/MainFeed/MainFeed';
import VideoMeet from './Components/VideoMeeting/VideoMeet'
import Messages from './Components/Messages/Messages'
import { Routes, Route } from 'react-router-dom';

function App() {

  const [theme, toggleButton] = useDarkMode();

  return (
    <>

      <SideMenu toggleButton={toggleButton} theme={theme}></SideMenu>

      <Routes>
        <Route path='/' element={<MainFeed theme={theme}></MainFeed>} />
        <Route path='/VideoCall' element={<VideoMeet></VideoMeet>} />
        <Route path='/Message' element={<Messages></Messages>} />

      </Routes>










      {/* <SideMenu theme={theme} />
      <Navbar className='side-bar' toggleButton={toggleButton} theme={theme} />
      <Messages/>
      {/* <UploadBar/> */}
      {/* <MainFeed theme={theme} /> */}
    </>
  );
}

export default App;
