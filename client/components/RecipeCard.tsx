import { useQuery } from '@tanstack/react-query'
import { fetchAllRecipeDetails } from '../apis/apiClientRecipes'
import { RecipeDetails } from './RecipeDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
import { useParams } from 'react-router-dom'

export function Recipe() {
  const recipeId = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchAllRecipeDetails(Number(recipeId.id)),
  })
  //params has  weird this where it is {id: 3} so need to dot into it
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
        <RecipeDetails recipe={data} />
        <RecipeIngredients />
        <RecipeMacros />
      </>
    )
}
