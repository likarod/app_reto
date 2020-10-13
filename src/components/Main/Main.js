import React, { Component, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Buscador from '../Buscador/Buscador';
import Contenidos from '../Contenido/Contenido'
import Pedidos from '../Pedidos/Pedidos';
import Registro from '../Registro/Registro'
import Contact from '../Contact/Contact'

// import Sigin from '../Sigin';
import './Main.css';

class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <section>
        <article className="fondo">
          <Switch>
            <Route exact path="/" component={Buscador}/>
            <Route exact path="/productos" component={Contenidos}/>
            <Route exact path="/pedidos" component={Pedidos}/>
            <Route exact path="/registro" component={Registro}/>
            <Route exact path="/contacto" component={Contact}/>
          </Switch>
        </article>
        
      </section>
    );
  }
}

export default Main;