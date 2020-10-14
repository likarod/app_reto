import React, { Component } from 'react';

import Compra from '../Compra/Compra';
import './Pedidos.css';

class Pedidos extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };

  }

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
          <Compra/>
      </section>
    );
  }
}

export default Pedidos;