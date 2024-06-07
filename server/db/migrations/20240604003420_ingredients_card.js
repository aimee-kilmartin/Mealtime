export async function up(knex) {
  return knex.schema.createTable('ingredients_card', (table) => {
    table.increments('id')
    table.integer('recipe_id')
    table.integer('ingredients_id')
    table.string('quantity')
    table.string('unit')
    table.string('note')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ingredients_card')
}
