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
  image: string
  categoryId: number
  creationDate: string
}

export interface Category {
  id: number
  description: string
  image: string
}
