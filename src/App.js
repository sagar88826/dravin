import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode} from './Components/Navbar/useDarkMode'

function App() {

  const [theme, toggleButton] = useDarkMode();
  if(theme==='dark'){
    document.body.style.backgroundColor='#28282B';
   }else{
    document.body.style.backgroundColor='#FAF9F6';
   }
  
  return (
  <>
  <SideMenu theme={theme}/>
  <Navbar toggleButton={toggleButton} theme={theme} />
  </>
  );
}

export default App;
