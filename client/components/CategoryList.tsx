import { fetchRecipesByCategory } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { RecipeMiniCard } from './RecipeMiniCard'

export function CategoryList() {
  const { category } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchRecipesByCategory(category),
  })
  if (isLoading) {
    return <p>Loading data...</p>
  }

  if (isError) {
    console.log(error)
    return <p>Error...</p>
  }

  if (data) {
    {
      console.log(data)
    }
    return (
      <>
        {data.map((recipe) => (
          <RecipeMiniCard key={recipe.id} {...recipe} />
        ))}
      </>
    )
  }

  //   return (
  //     <>
  //       {data.map((recipe) => (
  //         <li key={recipe.id}>{recipe.description}</li>
  //       ))}
  //     </>
  //   )
  // }
}
