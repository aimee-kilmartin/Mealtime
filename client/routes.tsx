import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import { Categories } from './components/Categories.tsx'
import { CategoryList } from './components/CategoryList.tsx'
import { Recipe, RecipeCard } from './components/RecipeCard.tsx'
import { RecipeIngredients } from './components/RecipeIngredients.tsx'
import {
  RecipeDescription,
  RecipeDetails,
} from './components/RecipeDetails.tsx'
import { RecipeMacros } from './components/RecipeMacros.tsx'
// import { RecipeMethod } from './components/RecipeMethod.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Categories />} />
    <Route path="/:category" element={<CategoryList />} />
    <Route
      path="/recipes/:id"
      element={
        <>
          <RecipeCard />
          {/* <RecipeIngredients /> */}
          {/* <RecipeDetails /> */}
          {/* <RecipeMacros /> */}
        </>
      }
    />
    {/* <Route path="/locations/:id/method" element={<RecipeMethod />} /> */}
  </Route>,
)
