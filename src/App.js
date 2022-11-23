import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode} from './Components/Navbar/useDarkMode'
import MainFeed from './Components/MainFeed/MainFeed';
import UploadBar from './Components/UserUpload/UploadBar';
function App() {

  const [theme, toggleButton] = useDarkMode();
  if(theme==='dark'){
    document.body.style.backgroundColor='#28282B';
   }else{
    document.body.style.backgroundColor='#fff';
   }
  
  return (
  <>
  <SideMenu theme={theme}/>
  <Navbar className='side-bar' toggleButton={toggleButton} theme={theme} />
  <UploadBar/>
  <MainFeed/>
  </>
  );
}

export default App;
