import request from 'superagent'

const rootUrl = '/api/v1/recipes'

export async function fetchAllRecipeDetails(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  console.log('api', id, res.body)
  return res.body
}

// export async function fetchRecipeIngredients(id) {
//   const res = await request.get(`${rootUrl}/${id}`)
//   return res.body
// }

// export async function fetchRecipeMacros(id) {
//   const res = await request.get(`${rootUrl}/${id}`)
//   return res.body
// }
