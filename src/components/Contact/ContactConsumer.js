import React, { Component } from 'react'
import Form from '../Form/Form'

export class ContactConsumer extends Component {

    render() {
        return (
            <article>
                <h3>Escríbenos tus dudas</h3>
                <Form
                claseDiv="nameContact"
                claseForm="form"
                classP="nameParrafo"
                p="Nombre"
                classInput="nameInput"
                type="text"
                name="usuario"
                placeholder="Nombre"
                />
                <Form
                claseDiv="emailContact"
                claseForm="form"
                classP="emailParrafo"
                p="Email"
                classInput="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                />
                <Form
                claseDiv="comentarioContact"
                claseForm="form"
                classP="comentarioParrafo"
                p="Deje sus comentarios"
                classInput="comentarioInput"
                type="textarea"
                name="comentarios"
                placeholder="Escriba aquí"
                />
                <div className="envioContact">
                    <input type="submit" value="Envíe sus comentarios "/>
                </div>
            </article>
        )
    }
}
export default ContactConsumer;