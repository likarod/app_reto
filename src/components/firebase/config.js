// import {useState} from 'react';
// import firebase from 'firebase';
// import 'firebase/auth'
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyAsg7zkVaJvQYUG03_4_-kcMSCxcwgAXUQ",
//     authDomain: "d-app-firebase.firebaseapp.com",
//     databaseURL: "https://d-app-firebase.firebaseio.com",
//     projectId: "d-app-firebase",
//     storageBucket: "d-app-firebase.appspot.com",
//     messagingSenderId: "740862414419",
//     appId: "1:740862414419:web:f65b2a703e59310cc4c0a6"
//   };
  

// // //Se declaran las variables a utilizar para el registro
// //   const [usuario, setUsuario] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [emailError, setEmailError] = useState("");
// //   const [passwordError, setPasswordError] = useState("");

//   // Inicializando Firebase.
//   const Firebase {

//     constructor(){

//       //Inicializando firebase
//       firebase.initializeApp(firebaseConfig)
//       // Declarando el estado de la autenticación y de la DB.
//       this.auth = firebase.auth()
//       this.db = firebase.firestore()
//     }

//     // //Función para limpiar los campos.
//     // limpiarInputs = () => {
//     //   setEmail("");
//     //   setPassword("");
//     // }


//     // //Función para limpiar los errores.
//     // limpiarErorres = () => {
//     //   setEmailError("");
//     //   setPasswordError("");
//     // }

    
//     // Funcion de LogIn.
//     async manejarIngresoSesion(email, password) {
//       const usuario = await firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .catch(error => {
//           console.log(error)
//           return error
//           // switch(error.code){
//           //   case "auth/email-invalido":
//           //   case "auth/usuario-denegado":
//           //   case "auth/usuario-no-encontrado":
//           //   //  setEmailError(error.message);
//           //    break;
//           //   case "auth/password-debil":
//           //     // setPasswordError(error.message);
//           //     break;
//           // }
//           //Se verifican los posibles casos de error a la hora del ingreso
//         }) 
//         return usuario
//     }

//     // Función de SignIn
//     async manejarRegistroSesion(email, password){
//       // limpiarErorres();
//       const usuario = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(error => {
//         console.log(error)
//         return error
//         // switch(error.code){
//         //   case "auth/email-en-uso":
//         //   case "auth/email-invalido":
//         //   //  setEmailError(error.message);
//         //    break;
//         //   case "auth/error-password":
//         //     // setPasswordError(error.message);
//         //     break;
//         // }
//         //Se verifican todos los posibles casos de error.
//       })
//       return usuario
//     }

//     // async verificarAutenticacion(usuario) {
//     //   const usuario = firebase.auth()
//     //   .onAuthStateChanged(usuario => {
//     //     if (usuario) {
//     //       // limpiarInputs();
//     //       // setUsuario(usuario);
//     //     } else{
//     //       // setUsuario("")
//     //       // Esto significa que no hay usuarios
//     //     }
//     //   })
//     //   return usuario
//     // }

//     //LogOut
//     async manejarCierreSesion () {
//       const logout = await firebase.auth().signOut().catch(error => {
//         console.log(error)
//         return error
//       })
//       return logout
//     }
  
//   } 
  
//   export default new Firebase();