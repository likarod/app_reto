import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (

            <div className={this.props.claseDiv}>
                <form className={this.props.claseForm}>
                    <img className={this.props.classImage} src={this.props.src} alt={this.props.alt}/>
                    <p className={this.props.classP}>{this.props.p}</p>
                    <input className={this.props.classInput} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} min="0" max="3" step="1"/>  
                </form>
            </div>
        )
    }
}

export default Form
