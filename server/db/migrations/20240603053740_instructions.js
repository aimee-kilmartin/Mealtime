export async function up(knex) {
  return knex.schema.createTable('instructions', (table) => {
    table.increments('id')
    table.integer('step')
    table.string('instruction')
    table.integer('ingredient_id').unsigned()
    table.string('note')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('instructions')
}
