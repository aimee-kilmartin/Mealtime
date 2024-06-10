import { useQuery } from '@tanstack/react-query'
import { fetchRecipeDescription } from '../apis/apiClientRecipes'

interface Props {
  id: string
}

export function RecipeDescription({ id }: Props) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipeDescription(id),
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
        <p>Recipe Description</p>
        <>
          <div>
            <h2>{data.title} </h2>
            <p>{data.description}</p>
            <div>
              <img src={data.image} alt="" />
            </div>
          </div>
        </>
      </>
    )
}
