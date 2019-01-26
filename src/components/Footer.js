import React, { Component } from 'react';
import {Footer} from 'react-materialize';
import './Footer.css'

class FooterComponent extends Component {


  render() {
    return (
      <Footer className="centered" copyrights="Copyright 2019 ©"

        links={
          <ul> <h5 className="white-text">Teléfonos</h5>
            <li><p className="blue-text text-lighten-4">(+57) 312 2333803</p></li>

            <li><p className="blue-text text-lighten-4">(+57) 304 4372656</p></li>

            <li><p className="blue-text text-lighten-4">(+57) 300 6151869</p></li>
          </ul>
        }
>

        <h5 className="white-text">Neptune Labs</h5>
        <p className="blue-text text-lighten-4">Cra 77 No.26-65, Medellín, Antioquia</p>
        <p className="blue-text text-lighten-4">E-mail: info@neptunelabs.com</p>
        <p className="blue-text text-lighten-4">Somos tu aliado y tu respaldo</p>

    </Footer>
    );
  }

}

export default FooterComponent
