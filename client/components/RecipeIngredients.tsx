import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchRecipeIngredients } from '../apis/apiClientRecipes'
import { AllIngredients } from '../../models/details'

export function RecipeIngredients() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ingredients'],
    queryFn: () => fetchRecipeIngredients(id),
  })

  if (isLoading) {
    return <p>Loading..</p>
  }

  if (isError || !data) {
    return <p> error </p>
  }

  return (
    <>
      <h2>Ingredients</h2>
      <div>
        <ul>
          {data.map((ing: AllIngredients) => (
            <li key={ing.ingredientsId}>
              {ing.ingredientQuantity} {ing.ingredientUnit}{' '}
              {ing.ingredientDescription} <span>{ing.ingredientNote}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
