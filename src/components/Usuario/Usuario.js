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
        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey="1">
            <Link to="/registro">Registro</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link to="/login">Mi cuenta</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      

      </div>
    );
  }
}

export default Usuario;