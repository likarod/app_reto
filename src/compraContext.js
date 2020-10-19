import React from 'react';

const ContextClass = React.createContext();
const CompraProvider = ContextClass.Provider;
const CompraConsumer = ContextClass.Consumer;

export {CompraProvider, CompraConsumer}
export default ContextClass