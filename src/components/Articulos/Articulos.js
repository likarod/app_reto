import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Articulos.css'

export class Articulos extends Component {
    constructor(props){
        super(props);
        this.state = {
            productor: this.props.datos.productor,
            img: this.props.datos.img,
            nombre: this.props.datos.nombre,
            precios: this.props.datos.precios,
            direccion: this.props.datos.direccion,
            canton: this.props.datos.canton, 
        }
    }
    render() {
        return (
            <article>
                <div className="body_articulo">
                    <div className="container_art">
                        <div className="nombreProductor">
                            <p className="productor">{this.state.productor}</p>
                        </div>
                        <div className="imagenes">
                            <img src={this.state.img} class="imgProductos" alt="productos"/>
                        </div>  
                        <hr/>
                        <div className="productos">
                            <h2 className="nombre">{this.state.nombre}</h2>
                            <h3 className="precios">{this.state.precios}</h3>
                            <p className="direccion">
                            <box-icon name='map' size="xs"></box-icon> 
                                {this.state.direccion}</p>
                            <p className="canton">   
                            {this.state.canton}</p>
                        </div>
                        <div className="btnProductos">
                            
                        </div>
                    </div> 
                </div>
                
            </article>
        )
    }
}

export default Articulos
