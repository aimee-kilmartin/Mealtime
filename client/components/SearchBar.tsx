import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>
  searchQuery: string
}

export function SearchBar(props: Props) {
  const { setSearchQuery } = props
  const navigate = useNavigate()
  // const [searchQuery, setSearchQuery] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value
    setSearchQuery(searchTerm)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/search')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="global-search">Searching</label>
          <input
            type="search"
            id="global-search"
            placeholder="Search"
            // value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}
