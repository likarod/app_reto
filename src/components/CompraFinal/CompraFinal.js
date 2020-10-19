import React from 'react';
// import {Redirect} from 'react-router-dom'
import  {CompraConsumer} from '../../compraContext';

import './CompraFinal.css'


function CompraFinal () {

    return (
        <CompraConsumer>
            {(comprafinal)=> (
                <div>
                    {console.log(comprafinal.contexto)}
                    <div className="mensajeCompra">
                            {comprafinal.contexto.map((obj)=>
                                <div>
                                    <div className="infoCompraFinal">
                                        <div>
                                            <img src={obj.img} alt={obj.img} className="imgCompraFinal"/>
                                        </div>
                                        <h4 className="tituloCompraFinal">
                                            {obj.nombre}
                                        </h4>
                                        <div className="dPrecioCompraFinal">
                                            <h5>PRECIO</h5>
                                            <p>$ {obj.precios}</p>
                                        </div>  
                                    </div>
                                    
                                    <div className="subtotalCompraFinal">
                                        <h3>SUBTOTAL</h3>
                                        <p>$ {parseInt(obj.cantidad) + parseFloat(obj.precios)}</p>
                                    </div>
                                    <button className="vaciar">
                                        Vaciar Carrito
                                    </button>

                                </div>

                            )}
                            <button>
                                Ir a inicio
                            </button>
                    </div>
                </div>
            )}
        </CompraConsumer>
    )
}

export default CompraFinal