import React, { Component } from 'react'
import Form from '../Form/Form';

export class InicioSesion extends Component {
  constructor(props){
    super(props);
    this.state = {
      parametro:this.props.match.params.value
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
                placeholder="Introduzca su nombre"/> 

                <Form
                claseDiv="rzDiv"
                claseForm="form"
                classP="rzParrafo"
                p="Razón social" 
                classInput="rzInput"
                type="text"
                name="razon social"
                placeholder="Introduzca la razón social"
                />
                <Form
                claseDiv="nComercial"
                claseForm="form"
                classP="ncParrafo"
                p="Nombre Comercial"
                classInput="ncInput"
                type="text"
                name="nombre comercial"
                placeholder="Introduzca su nombre comercial"
                />
                <Form
                claseDiv="cdCiiu"
                classForm="form"
                classP="cdcParrafo"
                p="Código de Actividades Económicas" 
                classInput="cdInput"
                type="text"
                name="codigo ciiu"
                placeholder="Introduzca su código CIIU"
                />
                <Form
                claseDiv="actComercial"
                claseForm="form"
                classP="actParrafo"
                p="Actividades comerciales"
                classInput="actv"
                type="text"
                name="actividad comercial"
                placeholder="Introduzca su actividad comercial"
                />
                <Form
                claseDiv="cntStock"
                claseForm="form"
                classP="stockParrafo"
                p="Cantidad de productos"
                classInput="cntS"
                type="number"
                name="stock"
                placeholder="Stock"
                />
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
                />
                <Form
                claseDiv="passUser"
                claseForm="form"
                cassP="passParrafo"
                p="Contraseña"
                classInput="passInput"
                type="password"
                name="password"
                placeholder="Contraseña"
                />
              </article>
      
    }
  }
render() {
    return (
      <div>
        {this.mostrarProductor()}
        {this.mostrarConsumidor()}
        <div className="submitForm">
          <input type="submit" value="Crear cuenta"/>
        </div>
      </div>
    )
  }
}
export default InicioSesion