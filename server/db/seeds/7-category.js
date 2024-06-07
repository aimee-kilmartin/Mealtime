export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    { id: 1, description: 'Sides', image: '/public/01-image.webp' },
    { id: 2, description: 'Mains', image: '/public/02-image.webp' },
    { id: 3, description: 'Salads', image: '/public/03-image.webp' },
    { id: 4, description: 'Desserts', image: '/public/04-image.webp' },
    { id: 5, description: 'Breakfast', image: '/public/05-image.webp' },
    { id: 6, description: 'Drinks', image: '/public/06-image.webp' },
  ])
}
