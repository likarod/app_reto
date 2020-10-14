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
            <Link to={"/iniciosesion/" + this.state.param2}>¿Vendes?</Link>
            <Link to={"/iniciosesion/" + this.state.param1}>¿Compras?</Link>
        </div>
      </div>
    );
  }
}

const RegistreWithRouter = withRouter(Registro)
export default RegistreWithRouter;