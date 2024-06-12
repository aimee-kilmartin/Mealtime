import { RecipeDetails } from './RecipeDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'

export function RecipeData() {
  return (
    <>
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeMacros />
    </>
  )
}
