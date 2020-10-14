import React, { Component } from 'react'

export class InicioSesion extends Component {
  constructor(props){
    super(props);
    this.state = {
      parametro:this.props.match.params
    }
  }


  render() {
    return (
      <div>
        <h4>{this.state.parametro.value}</h4>
      </div>
    )
  }
}

export default InicioSesion