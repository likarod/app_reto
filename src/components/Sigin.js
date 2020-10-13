// import React, {useState} from 'react';
// import firebase from './firebase/config'
// import {Auth} from './context/authContext'




// function Sigin() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const {state, dispatch} = React.useContext(Auth)

//     const sigin = async (e) =>{
//         e.preventDefault();

//         let response = await firebase.sigin(email,password)
//         if(response.hasOwnProperty("message")){
//             console.log(response.message)
//         } else{
//             console.log(response.user);
//             return dispatch({
//                 type: "INSCRIBIRSE",
//                 payload: response
//             })
//         }

//         console.log(state.user)
//     }

    
//     return (    
//     <React.createElement>
//             <div>
//             <from onSubmit={sigin()}>
//                <p>Crear una cuenta</p>
//                 <label htmlFor="email"> Email:</label>
//                 <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
//                 <label htmlFor="password">Contraseña:</label>
//                 <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
    
//                 <input type="submit" value="Crear cuenta"/>

//             </from>
//           </div>
//     </React.createElement>
//     )
     
       

       
// }

// export default Sigin;