import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            clase: "",
            text: "",
            type: "",
        }
    }
    render() {
        return (
            <div>
                <div className={this.props.clase}>
                    <form>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
