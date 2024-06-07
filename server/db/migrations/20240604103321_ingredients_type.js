export async function up(knex) {
  return knex.schema.createTable('ingredients_type', (table) => {
    table.increments('id')
    table.string('type')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ingredients_type')
}
