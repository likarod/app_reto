import React from 'react';
import { firebaseAuth } from '../components/reducers/authReducer';
//firebaseauth reducer


//Aquí estamos creando el Context con su estado inicial
export const Auth = React.createContext();
const initialState =  {
    user: {}
}

// Aquí estamos generando los cambios. 
export const AuthProvider = (props) => {

    // El estado y el envío. Se utiliza el useReducer para poder enviar los elementos con actualizaciones globales del archivo authReducer
    const [state, dispatch] = React.useReducer(firebaseAuth, initialState)
    // Se genera la variable value para englobar los valores.
    const value = {state, dispatch}

    //Esto envuelve a todos los componentes y los pasa dentro de ese value o state para que se pueda acceder al estado inicial y el resto de la información.
    return <Auth.Provider value={value}>
                {props.children}
            </Auth.Provider>
}