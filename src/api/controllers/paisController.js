const PaisService = require('../../core/services/paisService')

class PaisController {
  async getTop10(req, res) {
    try {
      const paises = await PaisService.getTop10Populosos()
      res.status(200).json(paises)
    } catch (error) {
      res
        .status(500)
        .json({
          message: 'Erro ao buscar o top 10 países.',
          error: error.message,
        })
    }
  }

  async buscarPorNome(req, res) {
    const { nome } = req.query
    if (!nome) {
      return res
        .status(400)
        .json({ message: 'O parâmetro "nome" é obrigatório.' })
    }

    try {
      const pais = await PaisService.buscarPorNome(nome)
      if (!pais || pais.length === 0) {
        return res.status(404).json({ message: 'País não encontrado.' })
      }
      res.status(200).json(pais)
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar o país.', error: error.message })
    }
  }

  async avaliarPais(req, res) {
    const { nome_pais, avaliacao } = req.body
    if (!nome_pais || !avaliacao) {
      return res
        .status(400)
        .json({
          message: 'Os campos "nome_pais" e "avaliacao" são obrigatórios.',
        })
    }
    if (!['curtir', 'nao_curtir'].includes(avaliacao)) {
      return res
        .status(400)
        .json({
          message: 'O campo "avaliacao" deve ser "curtir" ou "nao_curtir".',
        })
    }

    try {
      const resultado = await PaisService.avaliar(nome_pais, avaliacao)
      res.status(201).json({
        message: 'Avaliação registrada com sucesso!',
        pais: nome_pais,
        ...resultado,
      })
    } catch (error) {
      res
        .status(500)
        .json({
          message: 'Erro ao registrar a avaliação.',
          error: error.message,
        })
    }
  }
}

module.exports = new PaisController()
