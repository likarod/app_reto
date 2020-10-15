import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="logosFooter">
                        <box-icon type='logo' name='facebook-circle'></box-icon>
                        <box-icon name='instagram' type='logo' ></box-icon>
                    </div>
                    <div className="enlacesFooter">
                        <a href="/">Aviso legal</a>
                        <a href="/">Política de condicones</a>
                    </div>
                </div> 
            </div>
        )
    }
}
