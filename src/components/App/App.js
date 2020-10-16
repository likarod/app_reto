import React, {useState} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import {UsuarioProvider} from '../../UsContext'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'


//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const user = {
    userType : "",
    isLoggedIn : false,
    userName : "",
    email : "",
    password : "",
  }
  const [usuario, setUsuario] = useState(user)

  return (
    <div className="App">
     <UsuarioProvider value={{contexto: usuario, metodo: setUsuario}}>   
      <BrowserRouter>
       <header>
          <Switch>
            <Nav/>
          </Switch>
      </header>
      <main>
      <hr/>
          <Switch>
            <Main/>
          </Switch>
        <footer>
          <Footer/>
        </footer>
      </main>
      </BrowserRouter>  
    </UsuarioProvider> 
    </div>
    
  );
}

export default App;
