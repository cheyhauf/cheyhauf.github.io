import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import useLocalStorage from './Utils/themeState';
import SideBar from './components/SideBar';
import NavTitle from './components/NavTitle';
import Home from './pages/Home';
import Themes from './pages/Themes';
import FranksDrank from './pages/FranksDrank';
import Data from './pages/Data';
import Software from './pages/Software';
import Links from './pages/Links';
import PageNotFound from './pages/PageNotFound';
import React from 'react';

function App() {

  const [theme, setTheme] = useLocalStorage("theme-type", "");

  const themeToggle = (themeName) => {
    setTheme(themeName);
  }


  return (
    <>
    <div className={theme}>
      <BrowserRouter>
        <SideBar />
        <NavTitle />
        <div className="pl-16 cursor-pointer" onClick={() => themeToggle("")}>Toggle Light Theme</div>
        <div className="pl-16 cursor-pointer" onClick={() => themeToggle("theme-dark")}>Toggle Dark Theme</div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Themes' element={<Themes />} />
            <Route path='/FranksDrank' element={<FranksDrank />} />
            <Route path='/Data' element={<Data />} />
            <Route path='/Software' element={<Software />} />
            <Route path='/Links' element={<Links />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
