import { useQuery } from '@tanstack/react-query'
import { fetchAllRecipeDetails } from '../apis/apiClientRecipes'
import { RecipeDetails } from './RecipeDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
import { useParams } from 'react-router-dom'

export function RecipeCard() {
  const recipeId = useParams()
  // const id = Number(recipeId)
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

  if (data) console.log('data', data)
  return (
    <>
      <p>Recipe for: {data.title}</p>
      {/* <ul>
        {data.map((recipe) => (
          <li key={data.id}> {data.id}</li>
        ))}
      </ul> */}

      <RecipeDetails detailsData={data} />
      {/* <RecipeIngredients />
        <RecipeMacros /> */}
    </>
  )
}
