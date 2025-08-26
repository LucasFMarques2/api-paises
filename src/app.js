const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger-output.json')
const routes = require('./api/routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send(
    '<h1>API Catálogo de Países</h1><p>Acesse <a href="/api-docs">/api-docs</a> para ver a documentação.</p>'
  )
})

module.exports = app
