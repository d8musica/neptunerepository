import React, { Component } from 'react';
import {Carousel} from 'react-materialize';

class About extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>

        </div>
        <div className='row'>
          <div className='col s12'>
            <Carousel options={{ fullWidth: true, indicators:true }}>
              <div className='teal lighten-3'>
                <p><h2 className="white-text center">QUIENES SOMOS</h2></p>
              </div>
              <div className='teal lighten-3'>
                <p><h2 className="white-text center">NUESTRA EMPRESA</h2></p>
              </div>
              <div className='teal lighten-3'>
                <p><h2 className="white-text center">POLÍTICA DE CALIDAD</h2></p>
              </div>

            </Carousel>
          </div>

        </div>

        <div className='row'>
          <div className="col s12 m6 l6">
            <div className="card-panel teal lighten-2">
            <p><h2 className="white-text center">Misión</h2></p>
             Lorem ipsum dolor sit
             amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d
             olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
             t aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c
             illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
             ulpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div className="card-panel teal lighten-2">
            <p><h2 className="white-text center">Visión</h2></p>
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

}

export default About;
