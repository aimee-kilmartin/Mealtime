export async function up(knex) {
  return knex.schema.createTable('recipe_cards', (table) => {
    table.increments('id')
    table.string('title')
    table.string('diet')
    table.integer('cook_time')
    table.integer('prep_time')
    table.integer('servings')
    table.string('image')
    table.integer('ingredient_id').unsigned()
    table.integer('macros_id').unsigned()
    table.integer('instruction_id').unsigned()
    table.integer('category_id').unsigned()
    table.date('creation_date')
    table.boolean('favourite')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipe_cards')
}
