import { useState } from 'react'
import { SearchIngredients } from './SearchIngredients'
import { SearchRecipes } from './SearchRecipes'
import { SearchBar } from './SearchBar'

export function SearchAll() {
  const [searchQuery, setSearchQuery] = useState('')
  // const { searchQuery, setSearchQuery } = props
  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <SearchRecipes searchQuery={searchQuery} />
      <SearchIngredients searchQuery={searchQuery} />
    </>
  )
}
