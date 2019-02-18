import React from 'react';
import {Link} from "react-router-dom";
import './Services.css'
import Img from '../img/img1.png';

const Services = () => {


    return (
      <div className='container'>
        <div className='row'>

        </div>
        <div className='row'>
          <div className='col s12 m4 l4'>
            <div className="our-services-img"><Link to="/asesorias"><img src={Img} alt=""></img></Link></div>
          </div>
          <div className='col s12 m4 l4'>
            <div className="our-services-img"><Link to="/cmr"><img src={Img} alt=""></img></Link></div>
          </div>
          <div className='col s12 m4 l4'>
            <div className="our-services-img"><Link to="/calibraciones"><img src={Img} alt=""></img></Link></div>
          </div>
        </div>

        <div className='row'>
          <div className="col s12">
            <div className="card-panel teal lighten-2">
            <p><h2 className="white-text center">Nuestros servicios</h2></p>
             Lorem ipsum dolor sit
             amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d
             olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
             t aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c
             illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
             ulpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

        </div>

      </div>
    );
  

}

export default Services;
