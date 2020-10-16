import React from 'react';

const ContextClass = React.createContext()
const UsuarioProvider = ContextClass.Provider;
const UsuarioConsumer = ContextClass.Consumer;

export  {UsuarioProvider, UsuarioConsumer};
export default ContextClass