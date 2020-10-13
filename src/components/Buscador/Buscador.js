import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      buscador:"",
      errormessange: "",
    };
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
          <div class="divFormBusca">
            <form class="formulario_busqueda">
              <div class="buscador_principal">
                <label for="busquedaArticulos" class="etq_busca_articulo">
                  <div class="caja_buscador">
                    <button aria-label="Buscar" type="submit" class="boton_buscador">
                    <box-icon name='search' size="xs"></box-icon>
                    </button>
                    <div>
                    <input class="input_buscador" aria-autocomplete="list" aria-expanded="false" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch" value="" name="buscador" placeholder="¿Qué deseas comprar?" required=""></input>
                    {/* <picture>
                      <img src="/media/pngegg.png" alt="fondo" className="fondoBuscador"/>
                    </picture> */}
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