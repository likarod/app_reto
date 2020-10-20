import React, { Component } from 'react';

import Form from "../Form/Form"
import './InfoProductor.css'


export default class InfoProductor extends Component {
    render() {
        return (
            <article>
                <div className="fondoProductor">
                </div>
                <div className="divInformacion">
                    <h2 className="tituloPerfil">Complete su informacion</h2>
                    <h3 className="rol">Rellene los campos</h3>
                    <Form 
                    claseDiv="nombreDiv"
                    claseForm="form"
                    divInput="dNombreInput"
                    classInput="nombreInput"
                    type="text"
                    name="nombre"
                    placeholder="Introduzca su nombre"/> 
                    <Form 
                    claseDiv="nombreDiv"
                    claseForm="form"
                    divInput="dApellidoInput"
                    classInput="apellidoInput"
                    type="text"
                    name="apellido"
                    placeholder="Introduzca sus apellidos"/>
                     
                    <Form
                    claseDiv="rzDiv"
                    claseForm="form"
                    divInput="drazonInput"
                    classInput="rzInput"
                    type="text"
                    name="razon social"
                    placeholder="Introduzca la razón social"/>
                    
                    <Form
                    claseDiv="nComercial"
                    claseForm="form"
                    divInput="dComercialInput"
                    classInput="ncInput"
                    type="text"
                    name="nombre comercial"
                    placeholder="Introduzca su nombre comercial"/>
                    
                    <Form
                    claseDiv="cdCiiu"
                    classForm="form"
                    divInput="dActividadInput"
                    classInput="cdInput"
                    type="text"
                    name="codigo ciiu"
                    placeholder="Introduzca su código CIIU"/>
                    <Form
                    claseDiv="cntStock"
                    claseForm="form"
                    divInput="dCantidadInput"
                    classInput="cantidadStock"
                    type="number"
                    name="Stock"
                    placeholder="Stock disponible"
                    />
                     <Form
                    claseDiv="precioProd"
                    claseForm="form"
                    divInput="dPrecioInput"
                    classInput="precioProducto"
                    type="number"
                    name="precioProducto"
                    placeholder="Introduzca el precio de su producto"/> 
                    
                </div>
            </article>
        )
    }
}
