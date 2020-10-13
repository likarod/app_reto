import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import './Carrito.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="/" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
    {children}
  </a>
));


class Carrito extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div>
      <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      <box-icon name='cart-alt' size="sm"></box-icon>
          <Link to="/pedidos">Pedidos</Link>
      </Dropdown.Toggle>
    </Dropdown>
      </div>
    );
  }
}

export default Carrito;