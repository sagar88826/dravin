
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
    const changeMode =()=>{
        if(mode==="light")
        {
            setMode('dark')
        }
        else{
            setMode('light')
        }
    }
  return (

  <>
  <SideMenu/>
  <Navbar changeMode={changeMode} mode={mode}/>
  
  
  </>

  );
}

export default App;
