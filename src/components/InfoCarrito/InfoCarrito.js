import React from 'react'

import './InfoCarrito.css'

export default function InfoCarrito() {
    return (
        <div>
            <div className="mensajeCarrito">
                <table id="lista-carrito" class="u-full-width">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    <box-icon name='plus-circle'></box-icon>
                </table>
                <a href="/" id="vaciar-carrito" className="vaciar">Vaciar Carrito</a>
            </div>
        </div>
    )
}
