import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

// import { Auth} from '../context/authContext'
import './Registro.css';



class Registro extends Component {
  constructor(props){
    super(props);
    this.state = {
      // email: "",
      // password:"",
    };
  }
  

  render() {

    return (
      <div>
        <div className="Registro">
          <p>Crear cuenta</p>
            <Link to="/inicio/productor">¿Vendes?</Link>
            <Link to="/inicio/consumidor">¿Compras?</Link>
        </div>
      </div>
    );
  }
}

const RegistreWithRouter = withRouter(Registro)
export default RegistreWithRouter;