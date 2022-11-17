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

  const [theme] = useLocalStorage("theme-type");

  return (
    <>
      <div className={theme} id="themeProvider">
      <BrowserRouter>
        <SideBar />
        <NavTitle />
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
