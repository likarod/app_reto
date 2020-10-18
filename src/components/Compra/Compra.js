import React, { Component } from 'react';
import './Compra.css'

export default class Compra extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: 1,
        }
        this.aumentarCantidad = this.aumentarCantidad.bind(this);
    }

    aumentarCantidad = (e) => {
        this.setState({valor: e.valor+1})
    }

    render() {
        return (
            <article>
                <div className="containerCompra">
                    <div className="headCompra">
                        <div className="logosHead">
                            <img src="/media/flecha.svg" alt="Flecha izquierda" className="flecha"/>
                            <img src="/media/love.svg" alt="Me gusta" className="meGusta"/>
                        </div>
                        <div className="carritoImg">
                            <img className="imgProductoCarrito" src="/media/avocado.png" alt="producto"/>
                        </div>
                    </div>
                    <div className="bodyCompra">  
                        <div className="compra_info">
                            <div className="compra_info_precio">
                                <span className="precio">$2/</span>
                                <span className="cantidad">kilo</span>
                            </div>
                            <div className="compra_info_nombre">
                                <a href="/pedidos" className="nombre_pedido"> 
                                    Maíz ecológico
                                </a> 
                            </div>
                        </div>
                        <div className="linea_accion_compra">
                            <button className="menos"> 
                                <img src="/media/Group2.svg" alt="Boton menos"/> 
                            </button>
                            
                            <div className="cantidad_input">
                                <input className="cantidad_compra" type="text" value={this.state.valor} name="cantidad_producto" min="1" max="9"></input>
                            </div>

                            <button onClick={this.aumentarCantidad} className="mas" >
                                <img src="/media/Group.svg" alt="Boton más"/>
                            </button>
                            
                            <div className="compra_final"> 
                                <button className="bntAddToCart">
                                    Añadir al carrito
                                </button>
                            </div> 
                        </div>
                    </div>  
                </div>
            </article>
        )
    }
}
