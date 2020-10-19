import express from 'express';

const app = express();

// app.use(express.static('client'));

/* Rutas del GET*/ 
app.get('/buscarProductos');
app.get('/mostarDireccion');

/* Rutas del POST */ 
app.post('/guadarProductor');
app.post('/guardarConsumidor');
app.post('/guardarProducto');


app.listen(6060, function ( ){
    console.log('¡Aplicación de ejemplo escuchando en el puerto 6060!')
})