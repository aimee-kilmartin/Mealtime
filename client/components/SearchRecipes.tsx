import { useState } from 'react'
import { SearchBar } from './SearchBar'
import { useAllRecipes } from '../hooks/useHooks'

export function SearchRecipes() {
  const [searchQuery, setSearchQuery] = useState('')
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
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <div>
          <div>
            {filteredData &&
              filteredData.map((recipe) => (
                <li key={recipe.id}>{recipe.title} </li>
              ))}
          </div>
        </div>
      </>
    )
  }
}
