export async function up(knex) {
  return knex.schema.createTable('method_card', (table) => {
    table.increments('id')
    table.integer('recipe_id').unsigned()
    table.integer('ingredient_card_id').unsigned()
    table.integer('method_id').unsigned()
    table.integer('step')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('method_card')
}
