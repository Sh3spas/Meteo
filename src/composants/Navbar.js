import React from "react";
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faUmbrella } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';





class Navbar extends React.Component {
    render() {
        return (
        <div className="navbar">
            <Link to="/"><FontAwesomeIcon icon={faUmbrella}/></Link>
            <Link to="/Settings"><FontAwesomeIcon icon={faCog}/></Link>
        </div>
        );
    }
}

export default Navbar;

