import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchRecipeDetails } from '../apis/apiClientRecipes'
import { useState } from 'react'
import { RecipeMethod } from './RecipeMethod'
import { RecipeDetails } from './RecipeDetails'
import { RecipeMiniDetails } from './RecipeMiniDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'

export function RecipeCard() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipeDetails(id),
  })
  const [methodOn, setMethodOn] = useState(true)

  function handleClick() {
    setMethodOn(!methodOn)
    console.log(methodOn)
  }

  if (isLoading) {
    return <p>Loading..</p>
  }

  if (isError || !data) {
    return <p> error </p>
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Ingredients - Method</button>
      </div>
      <h2>{data.title}</h2>

      {methodOn ? (
        <>
          <RecipeDetails />
          <RecipeIngredients />
          <RecipeMacros />
        </>
      ) : (
        <>
          <RecipeMiniDetails />
          <RecipeMethod />
        </>
      )}
    </>
  )
}
