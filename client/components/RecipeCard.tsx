import { useParams } from 'react-router-dom'
import { RecipeDetails } from './RecipeDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
import { useQuery } from '@tanstack/react-query'
import { fetchRecipeDetails } from '../apis/apiClientRecipes'

export function RecipeCard() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipe', id],
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
      <h2>{data.title}</h2>
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeMacros />
    </>
  )
}
