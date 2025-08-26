require('dotenv').config()

const app = require('./app')

console.log('String de Conexão do BD:', process.env.DB_CONNECTION_STRING)
console.log('URL Base da API:', process.env.API_BASE_URL)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(
    `Documentação da API disponível em http://localhost:${PORT}/api-docs`
  )
})
