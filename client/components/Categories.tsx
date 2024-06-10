import { Link } from 'react-router-dom'
import { Category } from '../../models/recipes'
import { fetchCategories } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

export function Categories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
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
              <div>
                <Link to={category.description}>
                  <p>{category.description}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
}
