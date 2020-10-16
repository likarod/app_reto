import React, { Component } from 'react';
import {OverlayTrigger,Tooltip, Button, Figure} from 'react-bootstrap';
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

    // cambiarEstado = () => {
    //     this.setState({estado: "elmActive"})
    //     console.log(this.estado)
    // }

    render() {
        return (
            <article>
                <div className="containerCompra">
                    <div className="compra">
                        <div className="head">
                            <h4>Carrito de compras</h4>
                        </div>
                        <hr/>
                        <div className="body">
                            <div className="carritoImg">
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="/media/68.jpg"
                                />
                            </Figure>
                            </div>
                            <div className="compra_info">
                                <div className="compra_info_nombre">
                                    <a href="/pedidos"> 
                                        <Figure.Caption>
                                          Maíz ecológico
                                        </Figure.Caption>
                                    </a> 
                                </div>
                                <div className="compra_info_precio">
                                <span className="precio"> 2$</span>
                            </div>
                        </div>
                        <div className="linea_accion_compra">
                            <button className="menos"> 
                              <box-icon  name='minus-circle'></box-icon>  
                            </button>
                            
                            <div className="cantidad_input">
                                <input className="cantidad_compra" type="text" value={this.state.valor} name="cantidad_producto" min="1" max="9"></input>
                            </div>
                            <button onClick={this.aumentarCantidad} className="mas" >
                                <box-icon name='plus-circle' size="sm"></box-icon>
                            </button>
                            
                            <div className="cantidad_final">
                                <span className="cantidad"></span>
                            </div>
                        </div>
                    </div>
                        <div className="btnBasura">
                         <OverlayTrigger overlay={<Tooltip id="tooltip">¿Estás seguro?</Tooltip>}>
                            <span className="d-inline-block">
                                <Button variant="outline-danger">
                                    <box-icon name='trash' ></box-icon>
                                </Button>
                            </span>
                        </OverlayTrigger>   
                    </div>
                    </div>
                    <div className="compra_final"> 
                        {/* style={{ pointerEvents: 'active' }
                        <a href="#" id="shoppingCard">
                            <div id="carrito" className="animElem elmActive">
                                <div id="mango"></div>
                                <div id="cesta"></div>
                                <div id="ruedas"></div>
                            </div>
                            <div id="check" className="animElem"></div>
                        </a> */}
                    </div> 
                </div>
            </article>
        )
    }
}
