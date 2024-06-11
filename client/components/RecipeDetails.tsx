import { Recipe } from '../../models/recipes'

// interface Props {}

export function RecipeDetails({ data }) {
  return (
    <>
      <h2>Details</h2>
      <p>Description: {data.description}</p>
      <p>Cook Time: {data.cookTime}</p>
      <p>Prep Time: {data.prepTime}</p>
      <p>Servings: {data.servings}</p>
      <div>
        <img src={data.image} alt="" />
      </div>
    </>
  )
}
