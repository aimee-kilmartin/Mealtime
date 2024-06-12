export type AllIngredients = Ingredients & IngredientsCard & IngredientsType
export interface IngredientsType {
  id: number
  type: string
}

export interface Ingredients {
  id: number
  ingredientDescription: string
  staple: boolean
  ingredientTypeId: number
}

export interface IngredientsCard {
  id: number
  recipeId: number
  ingredientsId: number
  ingredientQuantity: string
  ingredientUnit: string
  ingredientNote: string
}

export type AllMethods = Method & MethodCard
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

export type AllMacros = MacrosCard | Macros

export interface MacrosCard {
  macrosName: string
  id: number
  recipeId: number
  macrosId: number
  macrosQuantity: number
  macrosUnit: string
}

export interface Macros {
  id: number
  name: string
}
