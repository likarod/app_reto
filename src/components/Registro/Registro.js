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
      <article>
        <div className="Welcome">
          <div className="imgWel">
             <img src="/media/registroApp.jpg" alt="foto" className="imgPrincipal"/> 
          </div>
          <div className="Registro">
              <h2 className="welcomeMess">Regístrate en Farm Space</h2>
              <h3 className="subWelcome">Indícanos tu perfil</h3>
              <div className="Prod">
                <img src="/media/replant.png" alt="productor" className="imgProd"/>
                <Link to={"/iniciosesion/" + this.state.param2} className="btnProd">¿Vendes?</Link>
              </div>
              <div className="Consum">
                <img src="/media/organic-bag.png" alt="consumidor" className="imgConsum"/>
                <Link to={"/iniciosesion/" + this.state.param1} className="btnConsum">¿Compras?</Link>
              </div>
          </div> 
        </div>
      </article>
    );
  }
}

const RegistreWithRouter = withRouter(Registro)
export default RegistreWithRouter;