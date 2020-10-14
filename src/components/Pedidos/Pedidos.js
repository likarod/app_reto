import React, { Component } from 'react';
import {OverlayTrigger,Tooltip, Button} from 'react-bootstrap';
import './Pedidos.css';

class Pedidos extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 1,
    };

    this.aumentarCantidad = this.aumentarCantidad.bind(this);
  }

  aumentarCantidad = (e) => {
    this.setState({valor: e.target.value})
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <article>
        <div className="carritos_productos">
          <div className="container_producto">
            <div className="carrito">
              <h1>Carrito de compras</h1>
            </div>
            <hr/>
            <div className="carta_carrito">
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
                <div className="producto_cantidad">
                  <span className="valor_cantidad"></span>
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
        </div>
      </article>
    );
  }
}

export default Pedidos;