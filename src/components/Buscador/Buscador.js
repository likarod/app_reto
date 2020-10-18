import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Recomendacion from '../Recomendacion/Recomendacion'
// import Articulo from '../Articulos/Articulos'

import './Buscador.css';

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      recomendacion: [],
      errormessange: "",
      input: "",
    };
  }

  cambiarEstado = (e) => {
    this.setState({input: e.target.value})
  }

  componentDidMount(){
    this.setState({recomendacion: Recomendacion})
  }

  render() {
    return (
      <article>
        <div className="containerBuscador">
          <div className="divFormBusca">
            <form className="formulario_busqueda">
              <div className="buscador_principal">
                <label for="busquedaArticulos" className="etq_busca_articulo">
                  <div className="caja_buscador">
                    <div>
                    <input className="input_buscador" aria-autocomplete="list" aria-expanded="false" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch" name="buscador" placeholder="Busca tus productos" required="" onChange={this.cambiarEstado} ></input>
                    </div> 
                    <div className="btn_buscador">
                      <Link to={"/articulos/" + this.state.input}>
                        <box-icon name='search' size="sm"></box-icon>
                      </Link>
                    </div>
                  </div>
                </label>
              </div>   
              {this.state.errormessage? <p>{this.state.errormessage}</p>:""}  
            </form>  
          </div> 
          <div className="divRecomendacion">
            {/* {this.state.recomendacion.map(productos => <Articulo datos={productos}/>)} */}
          </div>
        </div>
      </article>
     
    
    );
  }
}

export default Buscador;