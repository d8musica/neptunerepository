import React, { Component } from 'react';
import {Row,Input, Button} from 'react-materialize';
import {Link} from "react-router-dom";
function Error() {
  return <p style={{ color: 'red'}}>Error</p>;
}
class Contact extends Component {
  state={
    nombre: '',
    empresa: '',
    asunto: '',
    email: '',
    numero: '',
    direccion:'',
    checked: false,
  }

  handleChangeName = e => {
    this.setState({
      nombre: e.target.value
    })
  }
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name !== '' && this.state.email !== '') {
      this.setState({
        checked: true,
      })
    }

    this.state.checked ? console.log('Submit') : console.log('Aun falta')
  }
  render() {
    console.log(this.state)
    return (
      <div className='container'>
        <div className='row'></div>
        <div className='row'>
          <div className='teal lighten-3'>
            <h2 className="white-text center">Contáctanos</h2>
          </div>
        </div>
        <div className='row'>
          <div className='white'>
            <Row>
              <Input onChange={this.handleChangeName} type="text" placeholder="Nombre y Apellido" s={6} label="Nombre completo" validate/> {/* HOLA SOY UN mensajito*/}
              {this.state.nombre === '' && <Error />}
              <Input s={12} type="text" label="Empresa" validate/>
              <Input s={12} type="text" label="Asunto" placeholder="Cuéntanos que servicio necesitas" validate/>
              <Input onChange={this.handleChangeEmail} type="email" label="Email" s={12} placeholder="Escribe tu correo electrónico" validate/>
              <Input type="number" label="Teléfono" s={12} placeholder="Teléfono fijo o móvil" validate />
              <Input type="string" label="Dirección" s={12} placeholder="Ej: Cr 77 No.26-65, Barrio, Ciudad, Departamento" validate/>
              <Input s={9} type='textarea' placeholder="Escribe aquí tu mensaje..."  validate/>
            </Row>
            <Button onClick={this.handleSubmit} type='submit'>Confirmar</Button>
          </div>
        </div>

      </div>
    );
  }

}

export default Contact;
