import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {UsuarioConsumer} from '../../UsContext'
import './InicioSesion.css'
import Form from '../Form/Form';

export class InicioSesion extends Component {
  constructor(props){
    super(props);
    this.state = {
      parametro:this.props.match.params.value,
      email: "",
      usuario:"",
      password: "",
    }

    this.mostrarProductor = this.mostrarProductor.bind(this)
    this.mostrarConsumidor = this.mostrarConsumidor.bind(this)
  }  

mostrarProductor = () => {
  if(this.state.parametro === "Productor"){
    return  <article className="articlePerfil">
              <h2 className="tituloPerfil">Ingresa tus datos</h2>
              <h5 className="rol">Rol como {this.state.parametro}</h5>
                <Form 
                claseDiv="nombreDiv"
                claseForm="form"
                divInput="dNombreInput"
                classInput="nombreInput"
                type="text" 
                name="usuario"
                placeholder="Nombre comercial"
                funcion={this.cambiarEstado.bind(this)}/> 
                <Form
                claseDiv="emailProd"
                claseForm="form"
                divInput="dEmailInput"
                classInput="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Form
                claseDiv="passwordProd"
                claseForm="form"
                cassP="passProd"
                p="Contraseña"
                divInput="dPassInput"
                classInput="passInput"
                type="password"
                name="password"
                placeholder="Contraseña"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Link to="/infoproductor" className="masInfo">
                  <p className="masInfoPerfil">Añadir más información</p>
                </Link>
            </article> 
  }
}
mostrarConsumidor = () => {
    if(this.state.parametro === "Consumidor"){
      return <article className="articlePerfil">
              <h2 className="tituloPerfil">Ingrese sus datos</h2>
              <h4 className="rol"> Rol como {this.state.parametro}</h4>
                <Form
                claseDiv="nameUser"
                claseForm="form"
                divInput="dNombreInput"
                classInput="nombreInput"
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Form
                claseDiv="emailUser"
                claseForm="form"
                divInput="dEmailInput"
                classInput="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Form
                claseDiv="passwordUser"
                claseForm="form"
                divInput="dPassInput"
                classInput="passInput"
                type="password"
                name="password"
                placeholder="Contraseña"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Link to="/infoconsumidor" className="masInfo">
                  <p className="masInfoPerfil">Añadir más información</p>
              </Link>
              </article>
      
    }
  }

  guardarContexto (metodo){
    let consumidor = {
      userType:this.state.parametro,
      userName: this.state.usuario,
      email: this.state.email,
      password: this.state.password,
    }
    metodo(consumidor)
  }

  cambiarEstado(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
        <UsuarioConsumer>
          {(usuario) => (
            <div>
              <div className="divEntrada">
                {this.mostrarProductor()}
                {this.mostrarConsumidor()}

                <div className="submitForm">
                  <button onClick={()=>this.guardarContexto(usuario.metodo)} className="btnCrear">Crear cuenta</button>                
                  {/* <input type="submit" value="Crear cuenta" onSubmit={()=>{usuario.metodo(this.guardarContexto())}}/> */}
                </div>
                <Link to="/buscador" className="irInicio">
                  Ir al inicio
                </Link>
              </div>
            </div>
          )}
        </UsuarioConsumer>
    )
  }
}
export default InicioSesion