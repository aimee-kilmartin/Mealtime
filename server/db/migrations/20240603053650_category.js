export async function up(knex) {
  return knex.schema.createTable('category', (table) => {
    table.increments('id')
    table.string('description')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('category')
}
