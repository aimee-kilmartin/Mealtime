import { useAllRecipeIngredients } from '../hooks/useHooks'

interface Props {
  searchQuery: string
}

export function SearchIngredients({ searchQuery }: Props) {
  // const [searchIngredients, setSearchIngredients] = useState('')
  const { data, isLoading, isError } = useAllRecipeIngredients()

  if (isLoading) {
    return <p>Loading Recipes</p>
  }

  if (isError) {
    return <p>Error searching ingredients</p>
  }
  if (data) {
    const filteredData = data.filter((ingredient) => {
      return Object.values(ingredient)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    })
    return (
      <>
        {/* <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} /> */}
        <div>
          <div>
            {filteredData &&
              filteredData.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.ingredientDescription} </li>
              ))}
          </div>
        </div>
      </>
    )
  }
}
