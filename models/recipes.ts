import { AllIngredients, AllMacros, AllMethods } from '../models/details.ts'

export type RecipesFullList = Recipe | AllIngredients | AllMacros | AllMethods
export interface RecipesList {
  id: number
  title: string
  description: string
  image: string
  categoryId: number
  favourite: boolean
}

export interface Recipe extends RecipesList {
  cookTime: number
  prepTime: number
  servings: number
  creationDate: string
}

export type NewRecipe = Omit<RecipesList, 'id'>

export interface Category {
  id: number
  description: string
  image: string
}
