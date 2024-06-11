import { RecipeDetails } from './RecipeDetails'
import { RecipeIngredients } from './RecipeIngredients'
import { RecipeMacros } from './RecipeMacros'
interface Props {
  title: string
}
export function RecipeCard({ title }: Props) {
  return (
    <>
      <p>Recipe for: {title}</p>
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeMacros />
    </>
  )
}
