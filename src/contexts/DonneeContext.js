import React, { useState } from 'react';
import getData from '../services/api';

export const Donnee = React.createContext();

const DonneeProvider = ({ children }) => {
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
        <Donnee.Provider value={{ ville, temp, hum, vitesse, handleVilleChange }}>
        {children}
        </Donnee.Provider>
    );
    }

export default DonneeProvider;