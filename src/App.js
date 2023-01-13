import './App.css';
import SideMenu from './Components/SideMenu/SideMenu.js';
import { useDarkMode } from './Components/SideMenu/useDarkMode.js';
import MainFeed from './Components/MainFeed/MainFeed';
import VideoMeet from './Components/VideoMeeting/VideoMeet';
import Messages from './Components/Messages/Messages';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error/Error404';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

function App() {
  const [theme, toggleButton] = useDarkMode();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/feed"
          element={[
            <SideMenu toggleButton={toggleButton} theme={theme} />,
            <MainFeed theme={theme} />,
          ]}
        />
        <Route
          path="/VideoCall"
          element={[
            <SideMenu toggleButton={toggleButton} theme={theme} />,
            <VideoMeet />,
          ]}
        />
        <Route
          path="/Message"
          element={[
            <SideMenu toggleButton={toggleButton} theme={theme} />,
            <Messages />,
          ]}
        />
        <Route strict path="/*" element={<Error404></Error404>} />
        <Route path="/404" element={<Error404></Error404>} />
      </Routes>
    </>
  );
}

export default App;
