const { Router } = require('express')
const paisController = require('../controllers/paisController')

const router = Router()

router.get(
  '/top10',
  /* #swagger.tags = ['Países'] */
  /* #swagger.summary = 'Lista os 10 países mais populosos.' */
  /* #swagger.description = 'Retorna uma lista dos 10 países com a maior população, incluindo dados de avaliação.' */
  paisController.getTop10
)

router.get(
  '/buscar',
  /* #swagger.tags = ['Países'] */
  /* #swagger.summary = 'Busca um país pelo nome.' */
  /* #swagger.description = 'Retorna os dados de um país específico. A busca é flexível e encontra nomes parciais.' */
  /* #swagger.parameters['nome'] = {
        in: 'query',
        description: 'Nome do país a ser buscado (ex: Brazil, Germany).',
        required: true,
        type: 'string'
  } */
  paisController.buscarPorNome
)

router.post(
  '/avaliar',
  /* #swagger.tags = ['Países'] */
  /* #swagger.summary = 'Registra uma avaliação para um país.' */
  /* #swagger.description = 'Permite "curtir" ou "não curtir" um país. As avaliações são salvas no banco de dados.' */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados da avaliação.',
        required: true,
        schema: {
            $nome_pais: 'Brazil',
            $avaliacao: 'curtir'
        }
  } */
  paisController.avaliarPais
)

module.exports = router
