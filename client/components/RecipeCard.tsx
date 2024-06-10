import { useQuery } from '@tanstack/react-query'
import {
  fetchRecipeDescription,
  fetchRecipeDetails,
} from '../apis/apiClientRecipes'
import { RecipeDescription } from './RecipeDescription'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
import { useParams } from 'react-router-dom'

export function Recipe() {
  const { recipeTitle } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipeDescription(recipeTitle),
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
