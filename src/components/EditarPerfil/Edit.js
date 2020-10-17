import React, { Component } from 'react'
import Form from '../Form/Form'

export default class Edit extends Component {
    render() {
        return (
            <div>
                <h4>Edita tu perfil</h4>
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
            </div>
        )
    }
}
