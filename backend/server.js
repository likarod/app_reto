import express from 'express';

const app = express();

// app.use(express.static('client'));

app.get('/buscarProductos');
app.get('/mostrarProductro');
app.get('/mostarDireccion');
app.post('/guardarUsuario');
app.post('/guardarProducto');


app.listen(6060, function ( ){
    console.log('¡Aplicación de ejemplo escuchando en el puerto 6060!')
})