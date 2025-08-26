const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'API - Catálogo de Países',
    description:
      'Uma API para listar, buscar e avaliar países, consumindo a API REST Countries.',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  basePath: '/api',
  tags: [
    {
      name: 'Países',
      description: 'Endpoints relacionados a países',
    },
  ],
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/api/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Documentação Swagger gerada com sucesso!')
})
