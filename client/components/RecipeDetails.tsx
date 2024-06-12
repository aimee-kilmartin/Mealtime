import { useParams } from 'react-router-dom'
import { fetchRecipeDetails } from '../apis/apiClientRecipes'
import { useQuery } from '@tanstack/react-query'

export function RecipeDetails() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipeDetails(id),
  })

  if (isLoading) {
    return <p>Loading..</p>
  }

  if (isError || !data) {
    return <p> error </p>
  }

  return (
    <>
      <h2>Details</h2>
      <p>Description: {data.description}</p>
      <p>Cook Time: {data.cookTime}</p>
      <p>Prep Time: {data.prepTime}</p>
      {/* <p>Servings: {servings}</p> */}
      <p>Servings: {data.servings}</p>
      <div>
        <img src={data.image} alt="" />
      </div>
    </>
  )
}
