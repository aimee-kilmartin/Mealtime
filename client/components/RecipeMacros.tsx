import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchRecipeMacros } from '../apis/apiClientRecipes'
import { MacrosCard } from '../../models/details'

export function RecipeMacros() {
  const recipeId = useParams()
  const id = Number(recipeId.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['macros', id],
    queryFn: () => fetchRecipeMacros(id),
  })

  if (isLoading) {
    return <p>Loading..</p>
  }

  if (isError || !data) {
    return <p> error </p>
  }

  return (
    <>
      <h2>Macros</h2>
      <div>
        <ul>
          {data.map((macro: MacrosCard) => (
            <li key={macro.macrosId}>
              {' '}
              {macro.macrosQuantity} {macro.macrosUnit} {macro.macrosName}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
