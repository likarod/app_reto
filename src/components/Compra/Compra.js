import React, { Component } from 'react';
import {OverlayTrigger,Tooltip, Button} from 'react-bootstrap';
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
        this.setState({valor: e.target.value})
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
                            <div>
                            <img src="/media/68.jpg" alt="producto"/>
                            </div>
                            <div className="producto_info">
                                <div className="producto_info_nombre">
                                <a href="/pedidos">Patatas ecológicas</a> 
                                </div>
                                <div className="producto_info_precio">
                                <span className="precio"> 2$</span>
                            </div>
                        </div>
                        <div className="linea_accion_producto">
                            <div>
                            <input className="cantidad_producto" type="text" value={this.state.valor} name="cantidad_producto" min="1" max="9" onChange={this.aumentarCantidad}></input>
                            </div>
                            <div className="cantidad_final">
                                <span className="cantidad"></span>
                            </div>
                        </div>
                    </div>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">¿Estás seguro?</Tooltip>}>
                        <span className="d-inline-block">
                            <Button style={{ pointerEvents: 'none' }}>
                                <box-icon name='trash'></box-icon>
                            </Button>
                        </span>
                    </OverlayTrigger>    
                    </div>
                    <div className="compra_final">
                        <a href="#" id="shoppingCard">
                            <div id="carrito" className="animElem elmActive">
                                <div id="mango"></div>
                                <div id="cesta"></div>
                                <div id="ruedas"></div>
                            </div>
                            <div id="check" className="animElem"></div>
                        </a>
                    </div>
                </div>
            </article>
        )
    }
}
