// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   MutationFunction,
// } from '@tanstack/react-query'
// import { getCategories } from '../apis/apiClient.ts'
// import { getRecipesByCategory } from '../../server/db/dbFunctions.ts'
// import { useParams } from 'react-router-dom'
// import {
//   fetchAllRecipeDetails,
//   fetchRecipeDetails,
//   fetchRecipeIngredients,
//   fetchRecipeMacros,
// } from '../apis/apiClientRecipes.ts'

// export function useRecipeDetails(id) {
//   // const id = Number(recipeId)
//   return useQuery({
//     queryKey: ['recipe', id],
//     queryFn: () => fetchRecipeDetails(id),
//   })
// }
//params has  weird this where it is {id: 3} so need to dot into it

// export function useRecipeIngredients(id) {
//   // const id = Number(recipeId)
//   return useQuery({
//     queryKey: ['recipe', id],
//     queryFn: () => fetchRecipeIngredients(id),
//   })
// }

// export function useRecipeMacros(id) {
//   // const id = Number(recipeId)
//   return useQuery({
//     queryKey: ['recipe', id],
//     queryFn: () => fetchRecipeMacros(id),
//   })
// }
