import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ArticuloConsumer} from '../../articuloContext'

import './Articulos.css'

export class Articulos extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombreComercial: this.props.datos.razonSocial,
            nombre: this.props.datos.Producto,
            precios: this.props.datos.PrecioProducto,
            canton: this.props.datos.DescripcionCanton, 
            cantidad: 1,
            url: this.props.parametro,
            img:""
        }
    }

    mostrarImagenes = () =>{
        if(this.state.url === 'CACAO'){
            if(this.state.img !== '/media/FotoAlimentos/cacao.jpg')
                this.setState({img:'/media/FotoAlimentos/cacao.jpg'})
            return  <div className="imagenes">l
                        <img src='/media/FotoAlimentos/cacao.jpg' className="imgProductos" alt="productos"/>
                    </div>  
        } else if(this.state.url === 'NARANJAS'){
            if(this.state.img !== '/media/FotoAlimentos/Naranjas.jpeg')
                this.setState({img:'/media/FotoAlimentos/Naranjas.jpeg'})
            return  <div className="imagenes">
                        <img src='/media/FotoAlimentos/Naranjas.jpeg' className="imgProductos" alt="productos"/>
                    </div> 
        } else if(this.state.url === 'PAPA'){
            if(this.state.img !== '/media/FotoAlimentos/papas.jpg')
                this.setState({img:'/media/FotoAlimentos/papas.jpg'})
            return <div className="imagenes">
                        <img src='/media/FotoAlimentos/papas.jpg' className="imgProductos" alt="productos"/>
                    </div> 
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
                        {this.mostrarImagenes()}
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
