// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   MutationFunction,
// } from '@tanstack/react-query'
// import { getCategories } from '../apis/apiClient.ts'
// import { getRecipesByCategory } from '../../server/db/dbFunctions.ts'
// import { useParams } from 'react-router-dom'

// export function useFruits() {
//   const query = useQuery({ queryKey: ['fruits'], queryFn: getFruits })
//   return {
//     ...query,
//     // Extra queries go here e.g. addFruit: useAddFruit()
//   }
// }

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */

// export function useCategories() {
//   const query = useQuery({
//     queryKey: ['categories'],
//     queryFn: getCategories,
//   })
//   return { ...query }
// }

// export function useCategoryLists(category: string) {
//   const query = useQuery({
//     queryKey: ['categorylists'],
//     queryFn: getRecipesByCategory(),
//   })
//   return { ...query }
// }
