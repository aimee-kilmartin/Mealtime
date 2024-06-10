import { Link } from 'react-router-dom'
import { Category, RecipesList } from '../../models/recipes'
import { fetchRecipesByCategory } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

interface Props {
  category: RecipesList[]
}
// { recipes }: Props

export function CategoryList({ category }: Props) {
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

  if (data)
    return (
      <>
        {console.log(data)}
        <ul>
          {data.categories.map((category: Category) => (
            <li key={category.id}>
              {category.description}
              {/* <RecipeMiniCard {...recipe} /> */}
            </li>
          ))}
        </ul>
      </>
    )
}
