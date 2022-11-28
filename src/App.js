import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode } from './Components/Navbar/useDarkMode'
import MainFeed from './Components/MainFeed/MainFeed';
import VideoMeet from './Components/VideoMeeting/VideoMeet';



function App() {

  const [theme, toggleButton] = useDarkMode();

  return (
    <>
      <SideMenu theme={theme} />
      <Navbar className='side-bar' toggleButton={toggleButton} theme={theme} />
      {/* <UploadBar/> */}
      {/* <MainFeed theme={theme} /> */}
      <VideoMeet/>
    </>
  );
}

export default App;
