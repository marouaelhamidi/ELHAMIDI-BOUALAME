import React , {useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import ApiUsers ,{ApiRemoveUser} from './../api/user';

function Header(props) {
  
 
    return(
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
    
        <p className="masthead-subheading font-weight-light mb-0">le projet est crée par le binome :  <br></br>  </p>
      <h1 className="masthead-heading text-uppercase mb-0">Elhamidi || Boualame</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">Encadré par :<br></br> SAID GOUNANE</p>
    
        </div>
      </header>
    )
}





export default Header;