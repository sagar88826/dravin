import './App.css';

import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode } from './Components/SideMenu/useDarkMode.js'
import MainFeed from './Components/MainFeed/MainFeed';
import Messages from './Components/Messages/Messages'
import { Route, Routes } from 'react-router-dom';

function App() {

  const [theme, toggleButton] = useDarkMode();

  return (
    <>
     <SideMenu className='side-bar' toggleButton = {toggleButton} theme = {theme}/>
      <MainFeed theme = {theme}/>





      {/* <SideMenu theme={theme} />
      <Navbar className='side-bar' toggleButton={toggleButton} theme={theme} />
      <Messages/>
      {/* <UploadBar/> */}
      {/* <MainFeed theme={theme} /> */}
    </>
  );
}

export default App;
