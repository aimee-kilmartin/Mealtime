export async function up(knex) {
  return knex.schema.createTable('macros', (table) => {
    table.increments('id')
    table.string('quantity')
    table.string('unit')
    table.string('name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('macros')
}
