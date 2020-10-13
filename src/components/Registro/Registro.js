import React, { Component} from 'react';
// import { Auth} from '../context/authContext'
import './Registro.css';



class Registro extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password:"",

    };

    this.ingresar = this.ingresar.bind(this)
  }
  
  ingresar = (e) => {
    e.preventDefault()
  }
 

  render() {

    return (
      <div>
        <div>
          <div class="loginContainer">
            <from onSubmit={this.ingresar} class="loginForm">
              <div class="loginHeader">
                <h2>Crear cuenta</h2>
              </div>
              <div class="loginCamp">
                <label htmlFor="email"> Email:
                  <input type="email" name="email" onChange={(e)=> this.setEmail(e.target.value)}/>
                </label>
              </div>
              <div class="loginCamp">
                <label htmlFor="password">Contraseña:
                  <input type="password" name="password" onChange={(e)=> this.setPassword(e.target.value)}/>
                </label>
              </div>
              <div class="btnLogin">
                <input type="submit" value="Crear cuenta"/>
              </div>
            </from>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;