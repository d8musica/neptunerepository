import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize' //porque desde el yarn lo instalé
import {Link} from "react-router-dom"
import './Header.css' //depende de la arquitectura del proyecto la forma de llamar cosas
import Logo from '../img/neptune_logo.png'

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar brand=<img src={Logo} className='neptune_logo'></img> left className='navbar-css'>
          <div className='link-container'>
            <Link to="/about">Quienes somos</Link>
            <Link to="/services">Nuestros servicios</Link>
            <Link to="/contactus">Contáctanos</Link>
            <Link to="/workwithus">Trabaja con nosotros</Link>
          </div>
        </Navbar>

      </div>
    );
  }

}

export default Header;
