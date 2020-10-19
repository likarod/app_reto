import React from 'react';
import  {CompraConsumer} from '../../compraContext';

import './CompraFinal.css'

function CompraFinal () {
    return (
        <CompraConsumer>
            {(comprafinal)=> (
                <div>
                    {console.log(comprafinal.contexto)}
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
                                <tr>
                                    <tr>{comprafinal.contexto.img}</tr>
                                    <tr>{comprafinal.contexto.nombre}</tr>
                                    <tr>{comprafinal.contexto.precios}</tr>
                                    <tr>{comprafinal.contexto.cantidad}</tr>
                                </tr>
                            </tbody>
                            
                        </table>
                        <button className="vaciar">
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            )}
        </CompraConsumer>
    )
}

export default CompraFinal