export const firebaseAuth = (state, action) => {
    //Aquí valoramos el tipo de reacción que se realiza y devuelve un "OK" del estado mutado.
    switch(action.type) {
        case "INSCRIBIRSE":
            return{...state, user: action.payload}

        case "INICIAR_SESION":
            return{...state, user: action.payload}

        case "CERRAR_SESION":
            return {...state, user: action.payload}

        //Si nada ha cambiado, se devuelve el estado 
        default:
            return state;
    }
}