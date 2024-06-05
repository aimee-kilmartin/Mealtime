export async function up(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id')
    table.string('description')
    table.boolean('staple')
    table.string('category')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ingredients')
}
