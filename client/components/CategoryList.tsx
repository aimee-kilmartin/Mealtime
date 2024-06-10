import { Link } from 'react-router-dom'
import { Category, RecipesList } from '../../models/recipes'
import { fetchRecipesByCategory } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Recipe } from './RecipeCard'

// interface Props {
//   category: RecipesList[]
// }
// { recipes }: Props
// category }: Props

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
        <ul>
          {data.map((recipe) => (
            <li key={recipe.id}>{recipe.description}</li>
          ))}
        </ul>
      </>
    )
  }
}
