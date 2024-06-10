import request from 'superagent'

const rootUrl = '/api/v1/categories'

export async function fetchCategories() {
  const res = await request.get(rootUrl)
  return res.body
}

export async function fetchRecipesByCategory(category: string) {
  const res = await request.get(`${rootUrl}/${category}`)
  return res.body
}
