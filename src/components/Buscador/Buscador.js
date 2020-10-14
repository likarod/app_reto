import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Buscador.css';

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      errormessange: "",
      input: "",
    };
  }

  cambiarEstado = (e) => {
    this.setState({input: e.target.value})
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
          <div className="divFormBusca">
            <form className="formulario_busqueda">
              <div className="buscador_principal">
                <label for="busquedaArticulos" className="etq_busca_articulo">
                  <div className="caja_buscador">
                    <Link to={"/articulos/" + this.state.input}>
                      <box-icon name='search' size="xs"></box-icon>
                    </Link>
                    <div>
                    <input className="input_buscador" aria-autocomplete="list" aria-expanded="false" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch" name="buscador" placeholder="¿Qué deseas comprar?" required="" onChange={this.cambiarEstado} ></input>
                    </div>
                  </div>
                </label>
              </div>
                
              {this.state.errormessage? <p>{this.state.errormessage}</p>:""}  
            </form>  
          </div> 
      </article>
     
    
    );
  }
}

export default Buscador;