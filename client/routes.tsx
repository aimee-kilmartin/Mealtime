import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import { Categories } from './components/Categories.tsx'
import { CategoryList } from './components/CategoryList.tsx'
import { RecipeCard } from './components/RecipeCard.tsx'

// import { RecipeMethod } from './components/RecipeMethod.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Categories />} />
    <Route path="/:category" element={<CategoryList />} />
    <Route
      path="/recipes/:id"
      element={
        <>
          <RecipeCard title={''} />
        </>
      }
    />
    {/* <Route path="/locations/:id/method" element={<RecipeMethod />} /> */}
  </Route>,
)
