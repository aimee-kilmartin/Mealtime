export async function up(knex) {
  return knex.schema.createTable('method', (table) => {
    table.increments('id')
    table.string('instruction')
    table.string('note')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('method')
}
