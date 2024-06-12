import { fetchRecipesByCategory } from '../apis/apiClientLists'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { RecipeMiniCard } from './RecipeMiniCard'
import { Recipe } from '../../models/recipes'

export function CategoryList() {
  const { category } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categoryList'],
    queryFn: () => fetchRecipesByCategory(String(category)),
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
        {data.map((recipe: Recipe) => (
          <RecipeMiniCard key={recipe.id} {...recipe} />
        ))}
      </>
    )
  }
}
