import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

// import { Auth} from '../context/authContext'
import './Registro.css';



class Registro extends Component {
  constructor(props){
    super(props);
    this.state = {
      param1: "Consumidor",
      param2: "Productor"
    };
  }
  

  render() {

    return (
      <div>
        <div className="Registro">
          <h2>Crear cuenta</h2>
          <hr/>
          <div className="Prod">
            <img src="/media/replant.png" alt="productor"/>
            <Link to={"/iniciosesion/" + this.state.param2} className="btnProd">¿Vendes?</Link>
          </div>
          <div className="Consum">
            <img src="/media/organic-bag.png" alt="consumidor"/>
            <Link to={"/iniciosesion/" + this.state.param1} className="btnConsum">¿Compras?</Link>
          </div>
        </div>
      </div>
    );
  }
}

const RegistreWithRouter = withRouter(Registro)
export default RegistreWithRouter;