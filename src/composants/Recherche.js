import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Recherche extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recherche: 'Lamballe',
        };
    }
    render(){
        return(
            <div className='recherche'>
                <input type='text' onChange={this.handleChange} placeholder='Rechercher une ville' />
                <button onClick={this.handleClick}><FontAwesomeIcon icon={faSearch}/></button>
            </div>

        )
    }
  
    handleChange = (event) => {
        this.setState({ recherche: event.target.value });
      }

    handleClick = () => {
        this.props.onVilleChange(this.state.recherche);
      };
  }

    export default Recherche;