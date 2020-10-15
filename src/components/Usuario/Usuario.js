import React, { Component, useState } from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Usuario.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="/" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
    {children}
  </a>
));

let CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
    
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
          <Link to="/login">Mi cuenta</Link>
        </Dropdown.Toggle>
      </Dropdown>
      </div>
    );
  }
}

export default Usuario;