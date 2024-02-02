import '../styles/App.css';
import React from 'react';

import { useState } from 'react';

import getData from '../services/api';

import Navbar from '../composants/Navbar';
import Recherche from '../composants/Recherche';
import Donnee from '../composants/Donnee';



function App() {

  const [ville, setVille] = useState('Lamballe');
  const [temp, setTemp] = useState('10');
  const [hum, setHum] = useState('71');
  const [vitesse, setVitesse] = useState('4');



  const farenheitToCelsius = (farenheit) => {
    return Math.round((farenheit - 32) * 5 / 9);
  }

  const handleVilleChange = async(nouvelleVille) => {

    
    const result = await getData(nouvelleVille);

    if(result === undefined){
      document.getElementsByClassName('Alerte')[0].style.display = 'block';

    }else{
      document.getElementsByClassName('Alerte')[0].style.display = 'none';
      var tempConvertie = farenheitToCelsius(result[11].temp);

      setTemp(tempConvertie);
      setHum(result[11].humidity);
      setVitesse(result[11].windspeed);
      setVille(nouvelleVille);
    }
    
  };
  
  return (
    <div className={`App`}>
      <div className='Meteo'>
        
        <Recherche onVilleChange={handleVilleChange} />
        <div className='Alerte'>
          <p>La ville n'a pas été trouvé !</p>
        </div>
        <Donnee ville={ville} temperature={temp} humidite={hum} vitesseVent={vitesse}/>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;