export type AllIngredients = Ingredients | IngredientsCard | IngredientsType
export interface IngredientsType {
  id: number
  type: string
}

export interface Ingredients {
  id: number
  description: string
  staple: boolean
  ingredientTypeId: number
}

export interface IngredientsCard {
  id: number
  recipeId: number
  ingredientsId: number
  quantity: string
  unit: string
  note: string
}

export type AllMethods = Method | MethodCard
export interface Method {
  id: number
  method: string
  note: string
}

export interface MethodCard {
  id: number
  recipeId: number
  methodId: number
  step: number
}

export type AllMacros = Macros | MacrosCard
export interface Macros {
  id: number
  name: string
}

export interface MacrosCard {
  id: number
  recipeId: number
  macrosId: number
  quantity: number
  unit: string
}
