
import React, { Component } from 'react'
import Articulos from '../Articulos/Articulos'
// import Items from '../Productos/Items'

import './Contenido.css'

export default class Contenido extends Component {
    constructor(props){
        super(props);
         this.state = {
            productos: [],
            // params: this.props.input
        }
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/buscarProducto')
        .then(response => response.json())
        .then(productos=>console.log(productos))
        // //this.setState({productos})
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
                   {this.state.productos.sort().map((articulos) => <Articulos datos={articulos} key={articulos.id}/>)} 
                </div>
                {/*  Esta será la función que me creará nuevos artículos. Esta viene directamente del componentes Artículos {this.addItems()}*/}
                
                
            </section>
        )
    }
}
