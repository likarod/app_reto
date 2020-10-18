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
                {/*                        <div className="btnBasura">
                         <OverlayTrigger overlay={<Tooltip id="tooltip">¿Estás seguro?</Tooltip>}>
                            <span className="d-inline-block">
                                <Button variant="outline-danger">
                                    <box-icon name='trash' ></box-icon>
                                </Button>
                            </span>
                        </OverlayTrigger>   
                        </div> */}
                <a href="/cantidad" id="vaciar-carrito" className="vaciar">Vaciar Carrito</a>
            </div>
        </div>
    )
}
