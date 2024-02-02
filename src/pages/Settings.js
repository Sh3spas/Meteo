import Navbar from "../composants/Navbar"
import '../styles/Settings.css';

import React, {useEffect} from "react";

import { DarkModeContext } from '../contexts/DarkMode';






function Home(){

    const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

    async function changeMode() {
        await toggleDarkMode();
    }

    useEffect(() => {
        if (darkMode) {
          document.documentElement.style.setProperty('--background-color', '#1E1E1E');
          document.documentElement.style.setProperty('--text-color', '#ddd');
        } else {
          document.documentElement.style.setProperty('--background-color', '#2561A0');
          document.documentElement.style.setProperty('--text-color', '#ddd');
        }
      }, [darkMode]);


    return(
        <div className="App">
            <div className='Meteo'>
                <div className="Settings">
                    <h1>Settings</h1>

                    <h3>Dark mode</h3>

                    <label className="switch">
                        <input type="checkbox" onChange={changeMode} checked={darkMode ? true : false}/>
                        <span className="slider round"></span>
                    </label>



                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Home;