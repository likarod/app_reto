import React, { Component, useState } from 'react';
import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Usuario from '../Usuario/Usuario'
import './Menu.css';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="/" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
    {children}
    {/* &#x25bc; */}
  </a>
));

let CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

class Menu extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <box-icon name='menu'></box-icon>
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1">
          <Link to="/login"><Usuario/></Link>
        </Dropdown.Item>
        <hr></hr>
        <Dropdown.Item eventKey="2">
          <Link to="/buscador">Inicio</Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
          <Link to="/about">Sobre nosotros</Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="4">
          <Link to="/contacto">Contacto</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
  }
}

export default Menu;