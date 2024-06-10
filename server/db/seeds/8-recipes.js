export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {
      id: 1,
      title: 'Sesame & spring onion stir-fried udon with crispy tofu',
      description:
        "Do something different for dinner, with our vegan noodle, tofu, green bean and spring onion stir-fry. It's quick and healthy, plus it's budget-friendly too",
      prep_time: '5',
      cook_time: '15',
      servings: '4',
      image: '/01-recipe.webp',
      category_id: '2',
      creation_date: '7/06/2024',
      favourite: 'false',
    },
    {
      id: 2,
      title: 'Cheesy ham & broccoli pasta',
      description:
        'Satisfy your comfort food cravings with this cheap and simple creamy pasta dish with chunks of ham and crunchy veg',
      prep_time: '10',
      cook_time: '15',
      servings: '4',
      image: '02-recipe.webp',
      category_id: '2',
      creation_date: '7/06/2024',
      favourite: 'false',
    },
    {
      id: 3,
      title: 'Chorizo hummus bowl',
      description:
        "Add chorizo and kale to hummus for a dish that's packed with protein and flavour. Drizzle over olive oil and serve with flatbread to make lunch for one",
      prep_time: '5',
      cook_time: '10',
      servings: '1',
      image: '/03-recipe.webp',
      category_id: '1',
      creation_date: '7/06/2024',
      favourite: 'true',
    },
    {
      id: 4,
      title: 'Microwave mug cake',
      description:
        "Need a quick chocolate fix? Try making this easy microwave mug cake with storecupboard ingredients. It's even more delicious with a scoop of vanilla ice cream",
      prep_time: '5',
      cook_time: '2',
      servings: '1',
      image: '/04-recipe.webp',
      category_id: '4',
      creation_date: '7/06/2024',
      favourite: 'true',
    },
    {
      id: 5,
      title: 'Tomato soup with tear & share cheesy bread',
      description:
        "Use a packet mix to rustle up your own cheat's garlic bread to serve alongside classic and creamy tomato soup",
      prep_time: '20',
      cook_time: '30',
      servings: '4',
      image: '/05-recipe.webp',
      category_id: '1',
      creation_date: '7/06/2024',
      favourite: 'false',
    },
    {
      id: 6,
      title: '10-minute couscous salad',
      description:
        'This makes a great lunchbox filler for a day out and is equally good at home from the fridge',
      prep_time: '10',
      cook_time: '0',
      servings: '2',
      image: '/06-recipe.webp',
      category_id: '3',
      creation_date: '7/06/2024',
      favourite: 'false',
    },
    {
      id: 7,
      title: 'Dalgona coffee (whipped coffee)',
      description:
        'Our easy whipped coffee recipe is simple enough to make at home. This frothy drink, known as dalgona coffee, might just be your new favourite caffeine kick',
      prep_time: '8',
      cook_time: '0',
      servings: '1',
      image: '07-recipe.webp',
      category_id: '8',
      creation_date: '7/06/2024',
      favourite: 'true',
    },
  ])
}
