import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import UsuarioConsumer from '../../UsContext'
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
    return  <article className="artProductor">
              <h1>{this.state.parametro}</h1>
                <Form 
                claseDiv="nombreDiv"
                claseForm="form"
                classP="nombreProd"
                p="Nombre" 
                classInput="nombreInput"
                type="text"
                name="nombre"
                placeholder="Introduzca su nombre"
                funcion={this.cambiarEstado.bind(this)}/> 
                <Form
                claseDiv="emailProd"
                claseForm="form"
                classP="emailProd"
                p="Email"
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
                classInput="passInput"
                type="password"
                name="password"
                placeholder="Contraseña"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Link to="/infoproductor">
                  <button>Añade más información a tu pefil</button>
                </Link>
            </article> 
  }
}
mostrarConsumidor = () => {
    if(this.state.parametro === "Consumidor"){
      return <article className="artConsumidor">
              <h1>{this.state.parametro}</h1>
                <Form
                claseDiv="nameUser"
                claseForm="form"
                classP="nameParrafo"
                p="Nombre de usuario"
                classInput="nameInput"
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Form
                claseDiv="emailUser"
                claseForm="form"
                classP="emailParrafo"
                p="Email"
                classInput="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                funcion={this.cambiarEstado.bind(this)}
                />
                <Form
                claseDiv="passwordUser"
                claseForm="form"
                cassP="passParrafo"
                p="Contraseña"
                classInput="passInput"
                type="password"
                name="password"
                placeholder="Contraseña"
                funcion={this.cambiarEstado.bind(this)}
                />
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
              {this.mostrarProductor()}
              {this.mostrarConsumidor()}
              <div className="submitForm">
                <button onClick={()=>this.guardarContexto(usuario.metodo)}>Crear cuenta</button>
                {/* <input type="submit" value="Crear cuenta" onSubmit={()=>{usuario.metodo(this.guardarContexto())}}/> */}
              </div>
            </div>
          )}
        </UsuarioConsumer>
    )
  }
}
export default InicioSesion