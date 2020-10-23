
import React, { Component } from 'react'
import Articulos from '../Articulos/Articulos'
// import Items from '../Productos/Items'

import './Contenido.css'

export default class Contenido extends Component {
    constructor(props){
        super(props);
         this.state = {
            productos: [],
            params: this.props.input
        }
        
    }

    componentDidMount(){
        fetch(`http://localhost:3000/buscarProducto/CULTIVO DE ${this.props.match.params.producto}.`)
        .then(response => response.json())
        .then(products=>this.setState({productos:products}))
    }
    

    render() {
        return (
            <section>
                <div className="seccion">
                   {this.state.productos.map((articulos) => <Articulos datos={articulos} parametro={this.props.match.params.producto} key={articulos.id}/>)} 
                </div>
                {/*  Esta será la función que me creará nuevos artículos. Esta viene directamente del componentes Artículos {this.addItems()}*/}
                  
            </section>
        )
    }
}
