import { useAllRecipes } from '../hooks/useHooks'

interface Props {
  searchQuery: string
}

export function SearchRecipes({ searchQuery }: Props) {
  // const [searchRecipe, setSearchRecipe] = useState('')
  const { data, isLoading, isError } = useAllRecipes()

  if (isLoading) {
    return <p>Loading Recipes</p>
  }

  if (isError) {
    return <p>Error searching recipes</p>
  }
  if (data) {
    const filteredData = data.filter((recipe) => {
      return Object.values(recipe)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    })
    return (
      <>
        {/* <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} /> */}
        <div>
          {filteredData &&
            filteredData.map((recipe) => (
              <li key={recipe.id}>{recipe.title} </li>
            ))}
        </div>
      </>
    )
  }
}
