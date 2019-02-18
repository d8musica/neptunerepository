import React from 'react';
import {Navbar} from 'react-materialize' //porque desde el yarn lo instalé
import {Link} from "react-router-dom"
import './Header.css' //depende de la arquitectura del proyecto la forma de llamar cosas
import Logo from '../img/neptune_logo.png'

const Header = () => {


    return (
      <div>
        <Navbar brand=<img src={Logo} alt="" className='neptune_logo'></img> left className='navbar-css'>
          <div className='link-container'>
            <Link to="/about">Quienes somos</Link>
            <Link to="/services">Nuestros servicios</Link>
            <Link to="/contactus">Contáctanos</Link>
          </div>
        </Navbar>

      </div>
    );
  

}

export default Header;
