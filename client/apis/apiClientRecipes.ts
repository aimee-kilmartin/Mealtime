import request from 'superagent'

const rootUrl = '/api/v1/recipes'

export async function fetchRecipeDetails(recipeTitle) {
  const res = await request.get(`${rootUrl}/${recipeTitle}`)
  return res.body
}

export async function fetchRecipeDescription(recipeTitle) {
  const res = await request.get(`${rootUrl}/${recipeTitle}`)
  return res.body
}
