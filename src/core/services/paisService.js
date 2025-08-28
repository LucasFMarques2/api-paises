const axios = require('axios')
const PaisRepository = require('../repositories/paisRepository')

const API_BASE_URL = process.env.API_BASE_URL

class PaisService {
  async _formatarPais(paisData) {
    const nomeOficial = paisData.name.common
    const avaliacoes = await PaisRepository.obterAvaliacao(nomeOficial)

    return {
      nome: nomeOficial,
      populacao: paisData.population,
      continente: paisData.continents ? paisData.continents[0] : 'N/A',
      curtidas: avaliacoes.curtidas,
      nao_curtidas: avaliacoes.nao_curtidas,
    }
  }

  async getTop10Populosos() {
    const url = `${API_BASE_URL}/all?fields=name,population,continents`
    try {
      const response = await axios.get(url)
      const todosOsPaises = response.data

      todosOsPaises.sort((a, b) => b.population - a.population)

      const top10 = todosOsPaises.slice(0, 10)

      const resultadoFormatado = await Promise.all(
        top10.map(pais => this._formatarPais(pais))
      )

      return resultadoFormatado
    } catch (error) {
      throw error
    }
  }

  async buscarPorNome(nome) {
    const url = `${API_BASE_URL}/name/${nome}?fields=name,population,continents`
    try {
      const response = await axios.get(url)
      const paisEncontrado = response.data[0]

      if (!paisEncontrado) {
        return null
      }

      return this._formatarPais(paisEncontrado)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null
      }
      logAxiosError(error, `Erro ao buscar país por nome: ${nome}`)
      throw error
    }
  }

  async avaliar(nome_pais, tipoAvaliacao) {
    const paisExiste = await this.buscarPorNome(nome_pais)
    if (!paisExiste) {
      throw new Error(`O país "${nome_pais}" não foi encontrado.`)
    }

    if (tipoAvaliacao === 'curtir') {
      await PaisRepository.incrementarCurtidas(nome_pais)
    } else {
      await PaisRepository.incrementarNaoCurtidas(nome_pais)
    }

    return PaisRepository.obterAvaliacao(nome_pais)
  }
}

module.exports = new PaisService()
