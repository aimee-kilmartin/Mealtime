import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import { Categories } from './components/Categories.tsx'
import { CategoryList } from './components/CategoryList.tsx'
import { RecipeCard } from './components/RecipeCard.tsx'
import { SearchAll } from './components/SearchAll.tsx'

// import { RecipeMethod } from './components/RecipeMethod.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Categories />} />
    <Route path="/:category" element={<CategoryList />} />
    <Route path="/search" element={<SearchAll />} />
    <Route path="/recipes/:id" element={<RecipeCard />} />
    {/* <Route path="/search" element={<SearchResult searchQuery={query} />} /> */}
  </Route>,
)
