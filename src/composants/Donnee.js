import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind,faWater } from '@fortawesome/free-solid-svg-icons';

import React from 'react';


const pluit = require('../images/Pluit.png');
const soleil = require('../images/Soleil.png');
const nuageux = require('../images/Nuageux.png');


class Donnee extends React.Component{
    render(){
        return(
            <div className='Donnee'>
                <img src={this.getTempsGeneral()} alt='Temps' />
                <div className='DonneePrincipale'>
                    <h2>{this.props.temperature}°C</h2>
                    <h3>{this.props.ville}</h3>
                </div>
                <div className='DonneeSecondaire'>
                    <h4><FontAwesomeIcon icon={faWater}/> {this.props.humidite} %</h4>
                    <h4><FontAwesomeIcon icon={faWind}/> {this.props.vitesseVent} km/h</h4>
                </div>
                <div className='DonneeSecondaire'>
                    <h5>Humidité</h5>
                    <h5>Vitesse vent</h5>
                </div>
            </div>
        )
    }

    getTempsGeneral(){
        if(this.props.temperature > 20){
            return soleil;
        }
        else if(this.props.temperature < 10){
            return pluit;
        }
        else{
            return nuageux;
        }
    }
}

export default Donnee;