export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.integer('cook_time')
    table.integer('prep_time')
    table.integer('servings')
    table.string('image')
    table.integer('category_id').unsigned()
    table.date('creation_date')
    table.boolean('favourite')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
