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
       <header>
        <BrowserRouter>
          <Switch>
            <Nav/>
          </Switch>
        </BrowserRouter>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Main/>
          </Switch>
        </BrowserRouter>
        <footer>
          <Footer/>
        </footer>
      </main>
      {/* </FirebaseAuthProvider> */}
    </div>
    
  );
}

export default App;
