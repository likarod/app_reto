import React from 'react';

const ContextArticulo = React.createContext();
const ArticuloProvider = ContextArticulo.Provider;
const ArticuloConsumer = ContextArticulo.Consumer;

export {ArticuloProvider, ArticuloConsumer}
export default ContextArticulo