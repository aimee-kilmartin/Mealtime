export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    { id: 1, description: 'Sides', image: '/01-image.webp' },
    { id: 2, description: 'Mains', image: '/02-image.webp' },
    { id: 3, description: 'Salads', image: '/03-image.webp' },
    { id: 4, description: 'Desserts', image: '/04-image.webp' },
    { id: 5, description: 'Breakfast', image: '/05-image.webp' },
    { id: 6, description: 'Drinks', image: '/06-image.webp' },
  ])
}
