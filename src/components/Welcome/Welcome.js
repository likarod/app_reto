import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Form from '../Form/Form'
import './Welcome.css';

export default class Welcome extends Component {
    render() {
        return (
            <article>
                <div className="Welcome">
                    <div className="imgWel">
                        <img src="/media/image1.png" alt="foto" className="imgPrincipal"/> 
                    </div>
                </div>
                <div className="RegistroWelcome">
                    <h2 className="welcomeMess">Bienvenido a Farm Space</h2>
                    <h3 className="subWelcome">Ingresa a tu cuenta</h3>
                    <Form
                    claseDiv="emailUserReg"
                    claseForm="formReg"
                    divInput="dEmailReg"
                    classInput="emailInputReg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    />
                    <Form
                    claseDiv="passwordUserReg"
                    claseForm="formReg"
                    divInput="dPassReg"
                    classInput="passInputReg"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    />
                    <div className="dIngresoCuenta">
                        <button className="btnIngreso">Ingreso</button>
                    </div>
                    <div className="dOlvidarCuenta">
                        <p className="olvidoCuenta">
                            ¿Olvidaste tu contraseña?
                        </p>
                    </div>
                    <div className="dEnlaceCrearCuenta">
                        <p className="registrarCuenta">¿No tienes una cuenta? 
                        <Link to="/registro" className="linkRegistro">
                            Regístrate
                        </Link>
                        </p> 
                    </div>
                </div>
            </article>
        )
    }
}

