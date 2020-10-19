import express from 'express';


const app = express();

app.get("/getArticles")

app.listen(6060, function ( ){
    console.log('¡Aplicación de ejemplo escuchando en el puerto 6060!')
})