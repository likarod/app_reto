
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <from>
                            <div>
                                <h3>Hola <span></span>, ¿en qué podemos ayudarte?</h3>
                            </div>
                            <div>
                                <label htmlFor="name"> Nombre
                                <input type="text" name="nombre"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">Email:
                                <input type="email" name="email"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="telefono"> Telefono
                                {/* <select name="" id="" disabled="disabled">  
                                </select> */}
                                <input type="number" name="telefono"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="comentarios">
                                <div>
                                    <textarea name="mensjae" id="mensaje_contacto" cols="30" rows="10"></textarea>
                                </div>    
                                </label>
                            </div>
                            <div>
                                <input type="submit" value="Enviar"/>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        )
    }
}



// const Contact = () => {
//     return(
//         <React.createElement>
//             <div>
//                 <div>
//                 <div>
//                     <from>
//                     <div>
//                         <h1>¿Quieres contactarnos?</h1>
//                         <h2>Rellena este formulario</h2>
//                     </div>
//                     <div>
//                         <label htmlFor="name"> Nombre
//                         <input type="text" name="nombre"/>
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email:
//                         <input type="email" name="email"/>
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor=""></label>
//                     </div>
//                     <div>
//                         <input type="submit" value="Enviar"/>
//                     </div>
//                     </from>
//                 </div>
//                 </div>
//             </div>
//         </React.createElement>  
//     )
   
// }   

// export default Contact;