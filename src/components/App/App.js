import React, {useState, Suspense} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import {UsuarioProvider} from '../../authContext'
import {CompraProvider} from '../../compraContext'
import {ArticuloProvider} from '../../articuloContext';

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
  const [usuario, setUsuario] = useState(user);
  
  const [compra, setCompra ] = useState([
    {   
      id: "2",
      productor: 'Finca Valparaíso',
      img: "/media/68.jpg",
      nombre: 'Maiz',
      precios: '1.1',
      direccion: 'C// MEDARDO SILVA', 
      canton: "Quito",
      cantidad: 1       
  }
  ]);

  const [ articulo, setArticulo] = useState("");

  return (
    <div className="App">    
    <CompraProvider value={{contexto: compra, metodo: setCompra}}>
    <ArticuloProvider value={{contexto: articulo, metodo: setArticulo}}>
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
    </ArticuloProvider>
    </CompraProvider>
    </div>
    
  );
}

export default App;
