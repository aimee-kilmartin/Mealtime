import { useQuery } from '@tanstack/react-query'
import { fetchRecipeDetails } from '../apis/apiClientRecipes'
import { RecipeDescription } from './RecipeDescription'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
import { useParams } from 'react-router-dom'

export function Recipe() {
  const { recipeId } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipeDetails(recipeId),
  })
  if (isLoading) {
    return <p>Loading data...</p>
  }

  if (isError) {
    console.log(error)
    return <p>Error...</p>
  }

  if (data)
    return (
      <>
        <p>Recipe</p>
        <RecipeDescription />
        <RecipeIngredients />
        <RecipeMacros />
      </>
    )
}
