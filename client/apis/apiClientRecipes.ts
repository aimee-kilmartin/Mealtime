import request from 'superagent'
import { RecipesList } from '../../models/recipes'
import { AllIngredients } from '../../models/details'

const rootUrl = '/api/v1/recipes'

export async function fetchAllRecipes() {
  const res = await request.get(`${rootUrl}/allRecipes`)
  return res.body as RecipesList[]
}

export async function fetchAllIngredients() {
  const res = await request.get(`${rootUrl}/allIngredients`)
  return res.body as AllIngredients[]
}

export async function fetchRecipeDetails(id: number) {
  const res = await request.get(`${rootUrl}/${id}/details`)
  return res.body
}

export async function fetchRecipeIngredients(id: number) {
  const res = await request.get(`${rootUrl}/${id}/ingredients`)
  return res.body
}

export async function fetchRecipeMacros(id: number) {
  const res = await request.get(`${rootUrl}/${id}/macros`)
  return res.body
}

export async function fetchRecipeMethod(id: number) {
  const res = await request.get(`${rootUrl}/${id}/method`)
  return res.body
}
