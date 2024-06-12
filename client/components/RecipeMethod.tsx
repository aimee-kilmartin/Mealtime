import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchRecipeMethod } from '../apis/apiClientRecipes'
import { AllMethods } from '../../models/details'
export function RecipeMethod() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['method'],
    queryFn: () => fetchRecipeMethod(id),
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
          {data.map((method: AllMethods) => (
            <li key={method.methodId}>
              {method.step}. {method.method} <span>{method.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
