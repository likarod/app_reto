import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MiCuenta extends Component {
    render() {
        return (
            <article>
                <h3>Mi perfil</h3>
                <div className="contenedorPerfil">
                    <div className="imagen">
                    <box-icon name='user-circle' size="lg"></box-icon>
                    </div>
                    <div className="editar">
                        <Link to="/edit">
                           <button>Edita tu perfil</button> 
                        </Link>
                    </div>
                    <hr/>
                    <div className="informacion">
                        <div className="infoNombre">
                            <h4 className="nombre">Laura Martínez</h4>
                        </div>
                        <div className="infoCiudad">
                            <span className="ciudad">Cumbaya</span>,<span className="provincia">Pichincha</span>
                        </div>
                        <div className="masInfo">
                            <a href="/login">Añade más informacion sobre ti</a>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="cerrar">
                    <button>Cerrar Sesion</button>
                </div>
            </article>
        )
    }
}
