import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { UsuarioConsumer } from '../../UsContext'
import Usuario from '../Usuario/Usuario'

export default class MiCuenta extends Component {
    render() {
        return (
            <UsuarioConsumer>
            {(usuario)=> (         
                <article>
                    <h3>Mi perfil</h3>
                    <div className="contenedorPerfil">
                        <div className="imagen">
                        <box-icon name='user-circle' size="lg"></box-icon>
                        </div>
                        <div className="editar">
                            <Link to="/editar">
                            <button>Edita tu perfil</button> 
                            </Link>
                        </div>
                        <hr/>
                        <div className="informacion">
                            <div className="infoNombre">
                            <h4 className="nombre">{usuario.contexto.userName}</h4>
                            </div>
                            <div className="infoCiudad">
                                <span className="ciudad">Cumbaya</span>,<span className="provincia">Pichincha</span>
                            </div>
                            <div className="masInfo">
                                <a href="/infoconsumidor">Añade más informacion sobre ti</a>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="cerrar">
                        <Link to="/cerrar"></Link>
                        <button>Cerrar Sesion</button>
                    </div>
                </article>
            )}
            </UsuarioConsumer>
        )
    }
}
