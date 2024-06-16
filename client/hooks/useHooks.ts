import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'

import { fetchAllIngredients, fetchAllRecipes } from '../apis/apiClientRecipes'

export function useAllRecipes() {
  // const id = Number(recipeId)
  return useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchAllRecipes(),
  })
}

export function useAllRecipeIngredients() {
  // const id = Number(recipeId)
  return useQuery({
    queryKey: ['ingredientsCard'],
    queryFn: () => fetchAllIngredients(),
  })
}
