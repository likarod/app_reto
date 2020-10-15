
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <article>
                <div className="Contacto">
                    <h3>Hola
                        <span></span>
                    ¿en qué podemos ayudarte?
                    </h3>
                    <p>Por favor, elige la mejor opción</p>
                    <div className="Prod">
                        <Link to="/clienteprod">
                            Contacto para productores
                        </Link>
                    </div>
                    <div className="Consume">
                        <Link to="/clientecons">
                            Contacto para consumidores
                        </Link>
                    </div>
                </div>
            </article>
        )
    }
}

