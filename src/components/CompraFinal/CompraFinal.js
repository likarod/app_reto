import React from 'react'

import './CompraFinal.css'

export default function CompraFinal() {
    return (
        <div>
            <div className="mensajeCompra">
                <table id="lista-carrito" class="u-full-width">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    
                </table>
                <a href="/cantidad" id="vaciar-carrito" className="vaciar">Vaciar Carrito</a>
            </div>
        </div>
    )
}
