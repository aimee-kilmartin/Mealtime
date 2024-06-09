import { Link } from 'react-router-dom'

export function CategoryList() {
  const fakeList = [
    {
      id: 3,
      title: 'Chorizo hummus bowl',
      description:
        "Add chorizo and kale to hummus for a dish that's packed with protein and flavour. Drizzle over olive oil and serve with flatbread to make lunch for one",
      image: '/public/03-recipe',
    },
    {
      id: 5,
      title: 'Tomato soup with tear & share cheesy bread',
      description:
        "Use a packet mix to rustle up your own cheat's garlic bread to serve alongside classic and creamy tomato soup",
      image: '/public/05-recipe',
    },
  ]
  return (
    <>
      <ul>
        {fakeList.map((recipes) => (
          <li key={recipes.id}>
            <Link to={String(recipes.id)}>
              {' '}
              <img src={recipes.image} alt=""></img>
              {recipes.title}
              {recipes.description}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
