import React, { Component } from 'react';
import Form from "../Form/Form"

export default class InfoProductor extends Component {
    render() {
        return (
            <article>
                <h2 className="tituloPerfil">Información para Productor</h2>
                <Form 
                claseDiv="nombreDiv"
                claseForm="form"
                classP="nombreProd"
                p="Nombre" 
                classInput="nombreInput"
                type="text"
                name="nombre"
                placeholder="Introduzca sus apellidos"/> 
                <Form 
                claseDiv="nombreDiv"
                claseForm="form"
                classP="apellidoProd"
                p="Apellidos" 
                classInput="apellidosInput"
                type="text"
                name="apellido"
                placeholder="Introduzca sus apellidos"
                /> 
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
                placeholder="Stock disponible"
                />
            </article>
        )
    }
}
