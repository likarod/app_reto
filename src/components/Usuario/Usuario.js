import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Usuario.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="/" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
    {children}
  </a>
));


class Usuario extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <div>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <box-icon name='user'></box-icon>
        </Dropdown.Toggle>
        <Dropdown.Toggle as={CustomToggle} id="InicioSesion">
          <Link to="/">Crear cuenta</Link>
        </Dropdown.Toggle>
        <Dropdown.Toggle as={CustomToggle} id="Cuenta">
          <Link to="/micuenta">Mi cuenta</Link>
        </Dropdown.Toggle>
      </Dropdown>
      </div>
    );
  }
}

export default Usuario;