import React, { Component } from 'react'
import Articulos from '../Articulos/Articulos'
import Items from '../Productos/Items'

import './Contenido.css'

export default class Contenido extends Component {
    constructor(props){
        super(props);
         this.state = {
            productos: [],
            param:this.props.match.params,
        }
        
    }

    componentDidMount(){
        // fetch('/getProductos')
        console.log(this.state.param.producto)
        this.setState({productos:Items})
    }
    

    /* 
    addItems(){
        return this.state.productos.map((articulo, index) =>
        <Articulos datos={articulo} id={index+1}/>)   
        // Cada que se pasa algo por el atributo de una etiqueta. Eso se pasa por PROPS y se lee en ARTICULOS.js
    }
    */

    render() {
        return (
            <section>
                <div className="seccion">
                    <h1>Producto: {this.state.param.producto}</h1>
                   {this.state.productos.map(articulos => <Articulos datos={articulos} />)} 
                </div>
                {/*  Esta será la función que me creará nuevos artículos. Esta viene directamente del componentes Artículos {this.addItems()}*/}
                
                
            </section>
        )
    }
}
