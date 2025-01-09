const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Api de bootcamps',
        description: 'Documentacion de la api de bootcamps y usuarios',
    },
    host: 'localhost:3000',
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints relacionados con los usuarios"
        },
        {
            "name": "Bootcamp",
            "description": "Endpoints relacionados con los bootcamps"
        }
    ],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routers/UsersRouter.js', './routers/BootcampsRouter.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    console.log('Swagger doc generado.');
});