export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('method_card').del()
  await knex('method_card').insert([
    { id: 1, recipe_id: '1', method_id: 1, step: '1' },
    { id: 2, recipe_id: '1', method_id: 2, step: '2' },
    { id: 3, recipe_id: '1', method_id: 3, step: '3' },
    { id: 4, recipe_id: '1', method_id: 4, step: '4' },
    { id: 5, recipe_id: '2', method_id: 5, step: '1' },
    { id: 6, recipe_id: '2', method_id: 6, step: '2' },
    { id: 7, recipe_id: '3', method_id: 7, step: '1' },
    { id: 8, recipe_id: '3', method_id: 8, step: '2' },
    { id: 9, recipe_id: '3', method_id: 9, step: '3' },
    { id: 10, recipe_id: '4', method_id: 10, step: '1' },
    { id: 11, recipe_id: '4', method_id: 11, step: '2' },
    { id: 12, recipe_id: '4', method_id: 12, step: '3' },
    { id: 13, recipe_id: '4', method_id: 13, step: '4' },
    { id: 14, recipe_id: '5', method_id: 14, step: '1' },
    { id: 15, recipe_id: '5', method_id: 15, step: '2' },
    { id: 16, recipe_id: '5', method_id: 16, step: '3' },
    { id: 17, recipe_id: '6', method_id: 17, step: '1' },
    { id: 18, recipe_id: '7', method_id: 18, step: '1' },
    { id: 19, recipe_id: '7', method_id: 19, step: '2' },
  ])
}
