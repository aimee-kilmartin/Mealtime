import request from 'superagent'

const rootUrl = '/api/v1/recipes'

export async function fetchRecipeDetails(recipeId) {
  const res = await request.get(`${rootUrl}/${recipeId}`)
  return res.body
}
