import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ArticuloConsumer} from '../../articuloContext'

import './Articulos.css'

export class Articulos extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:  this.props.datos.id,
            nombreComercial: this.props.datos.productor,
            img: this.props.datos.img,
            nombre: this.props.datos.nombre,
            precios: this.props.datos.precios,
            direccion: this.props.datos.direccion,
            canton: this.props.datos.canton, 
            cantidad: 1,
        }
    }


    render() {
        return (
            <ArticuloConsumer>
            {(articulos)=> (
             <article>
                <div className="body_articulo">
                    <div className="container_art">
                        <div className="nombreProductor">
                            <p className="productor">{this.state.nombreComercial}</p>
                        </div>
                        <div className="imagenes">
                            <img src={this.state.img} className="imgProductos" alt="productos"/>
                        </div>  
                        <hr/>
                        <div className="productos">
                            <h3 className="precios">${this.state.precios}</h3>
                            <h2 className="nombre">{this.state.nombre}</h2>
                            <div className="direccion">
                                <Link to="/ubicacion">
                                    <box-icon name='map' size="xs"></box-icon> 
                                    <p className="canton">
                                        {this.state.canton}
                                    </p>
                                </Link>
                            </div>  
                        </div>
                        <div className="separacion">
                        </div>
                        <div className="btnProductos">
                            <Link to="/pedidos">
                                <img src="/media/ShoppingBag.svg" alt="shopping cart"/>	
                                <button className="agregar" onClick={()=> articulos.metodo(this.state)}>
                                    AÑADIR	
                                </button>
                            </Link> 
                        </div>  
                    </div> 
                </div>
            </article>)}
            </ArticuloConsumer>    
        )
    }
}

export default Articulos
