import { React, createContext} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

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

export const SetThemeContext = createContext((_) => { });
//export const ThemeContext = createContext("theme-default");

function App() {
  
  const [theme, setTheme] = useLocalStorage("theme-type", "theme-default");

  return (
    <>
      <SetThemeContext.Provider value={setTheme}>
        {/* <ThemeContext.Provider value={theme}> */}
        <div className={theme} id="themeProvider">
          <HashRouter>
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
          </HashRouter>
        </div>
        {/* </ThemeContext.Provider> */}
      </SetThemeContext.Provider>
    </>
  );
}

export default App;
