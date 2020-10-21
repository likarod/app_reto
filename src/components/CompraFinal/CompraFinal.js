import React from 'react';
// import {Redirect} from 'react-router-dom'
import  {CompraConsumer} from '../../compraContext';

import './CompraFinal.css'


function CompraFinal () {

    return (
        <CompraConsumer>
            {(comprafinal)=> (
                <div>
                    <div className="mensajeCompra">
                            {comprafinal.contexto.map((obj)=>
                                <div>
                                    <div className="infoCompraFinal">
                                        <div>
                                            <img src={obj.img} alt={obj.img} className="imgCompraFinal"/>
                                        </div>
                                        <div className="tituloCompraFinal">
                                            <h5 className="productoCompraFinal">{obj.nombre}</h5>
                                        </div>
                                        <div className="dPrecioCompraFinal">
                                            <h5 className="precioCompraFinal">PRECIO</h5>
                                            <p className="money">$ {obj.precios}</p>
                                        </div>  
                                    </div>
                                    
                                    <div className="subtotalCompraFinal">
                                        <h3 className="subtotalCompraFinal">SUBTOTAL</h3>
                                        <p>$ {parseInt(obj.cantidad) + parseFloat(obj.precios)}</p>
                                    </div>
                                    <button className="vaciar">
                                        Vaciar Carrito
                                    </button>

                                </div>

                            )}
                            <button className="btnInicio">
                                Ir a inicio
                            </button>
                    </div>
                </div>
            )}
        </CompraConsumer>
    )
}

export default CompraFinal