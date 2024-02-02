import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Meteo from './pages/Meteo';
import Settings from './pages/Settings';

import DarkModeProvider from './contexts/DarkMode';



import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faWind,faWater,faHome,faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faWind)
library.add(faWater)
library.add(faHome)
library.add(faCog)


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <DarkModeProvider>
    <React.StrictMode>
    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Meteo />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </DarkModeProvider>

);
