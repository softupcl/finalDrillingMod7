// Importar Express
const express = require('express') ;


const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const  {UsersRouter, BootcampsRouter} = require ('./routers');

// Middleware
app.use(express.json());

// Configuración del puerto
const PORT = 3000;


// Rutas
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', UsersRouter);
app.use('/bootcamps', BootcampsRouter);

process.on('uncaughtException', (err) => {
    console.log('Error inesperado', err);
    process.exit(1);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 