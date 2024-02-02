import axios from 'axios';

const getData = async(ville) =>{

    try{

        const dateDuJour = LaDateDuJour(); 

        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ville}/${dateDuJour}/${dateDuJour}?key=AHFJAZ2VUYLFEELYQBG7S774Q`);

        const data = response.data;
        
        const array = Object.values(data);

        return array;
    } catch(error) {
        console.error(error);
    }
}

function LaDateDuJour(){

    var dateDuJour = new Date();

        var Annee = dateDuJour.getFullYear();

        var Mois = dateDuJour.getMonth() + 1;

        if(Mois < 10){
            Mois = '0' + Mois;
        }

        var Jour = dateDuJour.getDate();

        if(Jour < 10){
            Jour = '0' + Jour;
        }

        dateDuJour = Annee + '-' + Mois + '-' + Jour;

        return dateDuJour;

}



export default getData;