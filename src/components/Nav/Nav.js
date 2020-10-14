import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import Menu from '../Menu/Menu'
import Usuario from '../Usuario/Usuario'

import './Nav.css';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="/" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
    {children}
  </a>
));


class Nav extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div className="App-header">
        <div className="header_menu_drch">
          <ul className="Lista_nav">
            <li><Menu/></li>
          </ul>
        </div>
        <div className="header_menu_izq">
          <ul className="Lista_nav">
            <div className="div_items">
                <Dropdown>
                  <li>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                      <box-icon name='cart-alt' size="sm"></box-icon>
                      <Link to="/pedidos" className="link">Cesta</Link>
                    </Dropdown.Toggle>
                  </li>
                </Dropdown>
            </div>
            <div className="div_items">
              <li><Usuario/></li>
            </div>
          </ul>
        </div>
      </div>
      
    );
  }
}

export default Nav;