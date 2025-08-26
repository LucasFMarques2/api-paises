/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('avaliacoes', table => {
    table.increments('id').primary()
    table.string('nome_pais').notNullable().unique()
    table.integer('curtidas').defaultTo(0)
    table.integer('nao_curtidas').defaultTo(0)
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('avaliacoes')
}
