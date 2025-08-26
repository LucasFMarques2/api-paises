const knex = require('../../config/database')

const NOME_TABELA = 'avaliacoes'

class PaisRepository {
  async obterAvaliacao(nome_pais) {
    const avaliacao = await knex(NOME_TABELA).where({ nome_pais }).first()

    if (avaliacao) {
      return avaliacao
    }

    return { nome_pais, curtidas: 0, nao_curtidas: 0 }
  }

  async _garantirExistencia(nome_pais) {
    return knex(NOME_TABELA)
      .insert({ nome_pais, curtidas: 0, nao_curtidas: 0 })
      .onConflict('nome_pais')
      .ignore()
  }

  async incrementarCurtidas(nome_pais) {
    await this._garantirExistencia(nome_pais)
    return knex(NOME_TABELA).where({ nome_pais }).increment('curtidas', 1)
  }

  async incrementarNaoCurtidas(nome_pais) {
    await this._garantirExistencia(nome_pais)
    return knex(NOME_TABELA).where({ nome_pais }).increment('nao_curtidas', 1)
  }
}

module.exports = new PaisRepository()
