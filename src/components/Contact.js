import React, { Component } from 'react';
import {Row,Input} from 'react-materialize';
import {Link} from "react-router-dom";
class Contact extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'></div>
        <div className='row'>
          <div className='teal lighten-3'>
            <p><h2 className="white-text center">Contáctanos</h2></p>
          </div>
        </div>
        <div className='row'>
          <div className='white'>
            <Row>
              <Input type="text" placeholder="Nombre y Apellido" s={6} label="Nombre completo" validate/>

              <Input s={12} type="text" label="Empresa" validate/>
              <Input s={12} type="text" label="Asunto" placeholder="Cuéntanos que servicio necesitas" validate/>
              <Input type="email" label="Email" s={12} placeholder="Escribe tu correo electrónico" validate/>
              <Input type="number" label="Teléfono" s={12} placeholder="Teléfono fijo o móvil" validate />
              <Input type="tel" label="Dirección" s={12} placeholder="Ej: Cr 77 No.26-65, Barrio, Ciudad, Departamento" validate/>
              <Input s={9} type='textarea' placeholder="Escribe aquí tu mensaje..."  validate/>
              <Link to="/submission_success"><Input s={9} type='submit' className="btn waves-effect"/></Link>
            </Row>
          </div>
        </div>

      </div>
    );
  }

}

export default Contact;
