import { Link } from 'react-router-dom'

export function RecipeMiniCard() {
  const fakerecipe = {
    id: 3,
    title: 'Chorizo hummus bowl',
    description:
      "Add chorizo and kale to hummus for a dish that's packed with protein and flavour. Drizzle over olive oil and serve with flatbread to make lunch for one",
    image: '/03-recipe',
  }

  return (
    <>
      <p>
        <Link to={String(fakerecipe.id)}>{fakerecipe.title} </Link>
      </p>
      <p>{fakerecipe.description}</p>
      <img src={fakerecipe.image} alt=""></img>
    </>
  )
}
