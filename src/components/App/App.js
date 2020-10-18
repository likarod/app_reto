import React, {useState, Suspense} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import {UsuarioProvider} from '../../UsContext'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'


//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cargando from '../Cargando/Cargando';




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
      <Suspense fallback={<Cargando/>}> 
      <BrowserRouter>
       <header>
          <Switch>
            <Nav/>
          </Switch>
      </header>
      <main>
          <Switch>
            <Main/>
          </Switch>
      </main>        
      <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
      </Suspense>  
    </UsuarioProvider>
    </div>
    
  );
}

export default App;
