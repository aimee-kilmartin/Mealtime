export async function up(knex) {
  return knex.schema.createTable('macros_card', (table) => {
    table.increments('id')
    table.integer('recipe_id')
    table.integer('macros_id')
    table.string('quantity')
    table.string('unit')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('macros_card')
}
