import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ArticuloConsumer } from '../../articuloContext';
import {CompraConsumer} from '../../compraContext'
import './Compra.css'

export default class Compra extends Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }


    render() {
        return (
            <CompraConsumer>
            {(compra)=> ( 
                <ArticuloConsumer> 
                    {(articulo)=> (
                        <article>
                        {console.log(articulo)}
                        <div className="containerCompra">
                            <div className="headCompra">
                                <div className="logosHead">
                                    <Link to ="/articulos/Maiz">
                                        <img src="/media/flecha.svg" alt="Flecha izquierda" className="flecha"/>
                                    </Link> 
                                    <button className="btnMeGusta">
                                        <img src="/media/love.svg" alt="Me gusta" className="meGusta"/>
                                    </button>
                                </div>
                                <div className="carritoImg">
                                    
                                    <img className="imgProductoCarrito" src={articulo.contexto.img} alt="producto"/>
                                </div>
                            </div>
                            <div className="bodyCompra">  
                                <div className="compra_info">
                                    <div className="compra_info_precio">
                                        <span className="precio">{articulo.contexto.precios}/</span>
                                        <span className="cantidad">kilo</span>
                                    </div>
                                    <div className="compra_info_nombre">
                                        <a href="/pedidos" className="nombre_pedido"> 
                                            {articulo.contexto.nombre}
                                        </a> 
                                    </div>
                                    
                                </div>
                                <div className="linea_accion_compra">
                                    <button className="menos"> 
                                        <img src="/media/Group2.svg" alt="Boton menos"className="btnMenos"/> 
                                    </button>
                                    
                                    <div className="cantidad_input">
                                        <input className="cantidad_compra" type="text" value={articulo.contexto.cantidad} name="cantidad_producto" min="1" max="9"></input>
                                    </div>

                                    <button className="mas" onClick={()=> articulo.metodo({...articulo.contexto, cantidad: articulo.contexto.cantidad+1})}>
                                        <img src="/media/Group.svg" alt="Boton más" className="btnMas"/>
                                    </button>

                                    <div className="compra_final"> 
                                        <button className="btnAddToCart" onClick={()=> compra.metodo([...compra.contexto, articulo.contexto])}>
                                            Añadir producto
                                        </button>
                                    </div> 
                                </div>
                            </div>  
                        </div>
                    </article>
                )}
                </ArticuloConsumer>
            )}
            </CompraConsumer>
        )
    }
}
