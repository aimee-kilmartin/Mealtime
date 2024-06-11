import { Recipe } from '../../models/recipes'

// interface Props {}

export function RecipeDetails({ detailsData }) {
  // const servings = String(detailsData.servings)
  return (
    <>
      <h2>Details</h2>
      <p>Description: {detailsData.description}</p>
      <p>Cook Time: {detailsData.cookTime}</p>
      <p>Prep Time: {detailsData.prepTime}</p>
      {/* <p>Servings: {servings}</p> */}
      <p>Servings: {detailsData.servings}</p>
      <div>
        <img src={detailsData.image} alt="" />
      </div>
    </>
  )
}
