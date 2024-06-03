export async function up(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id')
    table.string('quantity')
    table.string('unit')
    table.string('description')
    table.string('note')
    table.boolean('staple')
    table.integer('ingredient_type_id').unsigned()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('ingredients')
}
