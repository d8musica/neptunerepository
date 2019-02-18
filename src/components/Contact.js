import React, { Component } from 'react';
import {Row,Input, Button} from 'react-materialize';
import {Link} from "react-router-dom";


class Contact extends Component {
  /*
  Dentro de la clase de tipo componente se definen las funciones y el estado
*/
  state={
    nombre: '',
    empresa: '',
    asunto: '',
    email: '',
    numero: '',
    direccion: '',
    mensaje: '',
    checked: false,
  }

  handleChangeName = e => {
    this.setState({
      nombre: e.target.value
    })
  }
  handleChangeCompany = e => {
    this.setState({
      empresa: e.target.value
    })
  }
  handleChangeIssue = e => {
    this.setState({
      asunto: e.target.value
    })
  }
  handleChangePhone = e => {
    this.setState({
      numero: e.target.value
    })
  }
  handleChangeAdress = e => {
    this.setState({
      direccion: e.target.value
    })
  }
  handleChangeMsg = e => {
    this.setState({
      mensaje: e.target.value
    })
  }
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name !== '' && this.state.empresa !== '' && this.state.asunto !== '' && this.state.email !== '' && this.state.numero !== '' && this.state.direccion !== '') {
      this.setState({
        checked: true,
      })
    }

    else {
      this.setState({
        checked: false,
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
              <Input onChange={this.handleChangeName} type="text" placeholder="Nombre y Apellido" s={6} label="Nombre completo" validate/>
              <Input onChange={this.handleChangeCompany} s={12} type="text" label="Empresa" validate/>
              <Input onChange={this.handleChangeIssue} s={12} type="text" label="Asunto" placeholder="Cuéntanos que servicio necesitas" validate/>
              <Input onChange={this.handleChangeEmail} type="email" label="Email" s={12} placeholder="Escribe tu correo electrónico" validate/>
              <Input onChange={this.handleChangePhone} type="number" label="Teléfono" s={12} placeholder="Teléfono fijo o móvil" validate />
              <Input onChange={this.handleChangeAdress} type="text" label="Dirección" s={12} placeholder="Ej: Cr 77 No.26-65, Barrio, Ciudad, Departamento" validate/>
              <Input onChange={this.handleChangeMsg} s={9} type='textarea' placeholder="Escribe aquí tu mensaje..."  validate/>
            </Row>
            <Button onClick={this.handleSubmit} type='submit'>Confirmar</Button>
          </div>
        </div>

      </div>
    );
  }

}

export default Contact;
