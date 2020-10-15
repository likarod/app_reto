import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';


import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'


//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   
  return (
    <div className="App">
      {/* <FirebaseAuthProvider {...config} firebase={firebase}> */}
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
      {/* </FirebaseAuthProvider> */}
    </div>
    
  );
}

export default App;
