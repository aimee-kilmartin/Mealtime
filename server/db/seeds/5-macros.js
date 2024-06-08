export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('macros').del()
  await knex('macros').insert([
    { id: '1', name: 'energy' },
    { id: '2', name: 'fat' },
    { id: '3', name: 'saturates' },
    { id: '4', name: 'carbs' },
    { id: '5', name: 'sugars' },
    { id: '6', name: 'fibre' },
    { id: '7', name: 'protein' },
    { id: '8', name: 'salt' },
  ])
}
