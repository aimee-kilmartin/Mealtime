export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ingredients_type').del()
  await knex('ingredients_type').insert([
    { id: 1, type: 'Produce' },
    { id: 2, type: 'Grains' },
    { id: 3, type: 'Protein' },
    { id: 4, type: 'Dairy' },
    { id: 5, type: 'Spices' },
    { id: 6, type: 'Condiments' },
    { id: 7, type: 'Baking' },
    { id: 8, type: 'Pantry' },
    { id: 9, type: 'Drinks' },
    { id: 10, type: 'Other' },
  ])
}
