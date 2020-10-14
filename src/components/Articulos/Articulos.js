import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Articulos.css'

export class Articulos extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: this.props.datos.img,
            nombre: this.props.datos.nombre,
            descripcion: this.props.datos.descripcion,
            productor: this.props.datos.productor,
            provincia: this.props.datos.provincia,
            precios: this.props.datos.precios
        }
    }
    render() {
        return (
            <article>
                <div className="body_articulo">
                    <div className="container_art">
                        <div className="imagenes">
                            <img src={this.state.img} class="imgProductos" alt="productos"/>
                        </div>
                        
                        <div className="productos">
                            <p className="productor">{this.state.productor}</p>
                            <h2 className="nombre">{this.state.nombre}</h2>
                            <h4 className="provincia">{this.state.provincia}</h4>
                            <h3 className="precios">{this.state.precios}</h3>
                            <p className="desc">{this.state.descripcion}</p>
                        </div>
                        <div className="btnProductos">
                            <Link to="/pedidos">
                              <button class="agregar"> 
                              Añadir al carrito
                              </button>  
                            </Link>
                            <button className="cantidad">
                                Cantidad 
                            </button>  
                        </div>
                    </div> 
                </div>
                
            </article>
        )
    }
}

export default Articulos
