import { useEffect } from 'react';
import useLocalStorage from '../Utils/themeState'; 

const Themes = () => {
    const [theme, setTheme] = useLocalStorage("theme-type", "");

    useEffect(() => {
        setTheme(theme);
    });

    return (
        <div className="ml-16 bg-skin-fill h-screen">
        <h1>I am the Theme page</h1>
        <ThemeCards />
            <div className="pl-16 cursor-pointer" onClick={() => setTheme("")}>Toggle Light Theme</div>
            <div className="pl-16 cursor-pointer" onClick={() => setTheme("theme-dark")}>Toggle Dark Theme</div>
        </div>      
    )
};


const ThemeCards = () => {

    return (
      <div>
      </div>
    )
}

export default Themes;