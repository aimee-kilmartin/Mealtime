import connection from './connection.ts'
import {
  Category,
  Recipe,
  RecipesFullList,
  RecipesList,
} from '../../models/recipes.ts'
import {
  AllIngredients,
  AllMacros,
  AllMethods,
  IngredientsCard,
  MacrosCard,
  MethodCard,
} from '../../models/details.ts'

export async function getAllCategories() {
  const categories = await connection('category').select()
  return categories
}

export async function getRecipesByCategory(
  category: string,
): Promise<RecipesList[]> {
  return await connection('recipes')
    .join('category', 'category.id', 'recipes.category_id')
    .where('category.description', category)
    .select(
      'recipes.id',
      'recipes.title',
      'recipes.description',
      'recipes.image',
    )
}

export async function getRecipeDetailsById(id: number): Promise<Recipe[]> {
  const recipeDetails = await connection('recipes')
    .where({ id })
    .select(
      'recipes.id',
      'recipes.title',
      'recipes.description',
      'recipes.image',
      'recipes.favourite',
      'recipes.cook_time',
      'recipes.prep_time',
      'recipes.creation_date',
    )
    .first()
  return recipeDetails as Recipe[]
}

export async function getRecipeIngredientsById(
  id: number,
): Promise<IngredientsCard[]> {
  return await connection('recipes')
    .join('ingredients_card', 'recipes.id', 'ingredients_card.recipe_id')
    .where('recipes.id', id)
    .join('ingredients', 'ingredients_card.ingredients_id', 'ingredients.id')
    .select(
      'ingredients_card.id',
      'ingredients_card.recipe_id as recipeId',
      'ingredients_card.ingredients_id as ingredientId',
      'ingredients_card.quantity as ingredientQuantity',
      'ingredients_card.unit as ingredientUnit',
      'ingredients_card.note as ingredientNote',
      'ingredients.description as ingredientDescription',
    )
}

export async function getRecipeMacrosById(id: number): Promise<MacrosCard[]> {
  return await connection('recipes')
    .join('macros_card', 'recipes.id', 'macros_card.recipe_id')
    .where('recipes.id', id)
    .join('macros', 'macros_card.macros_id', 'macros.id')
    .select(
      'macros_card.id',
      'macros_card.recipe_id as recipeId',
      'macros_card.macros_id as macrosId ',
      'macros_card.quantity as macrosQuantity',
      'macros_card.unit as macrosUnit',
      'macros.name as macrosName',
    )
}

export async function getRecipeStepsById(id: number): Promise<MethodCard[]> {
  return await connection('recipes')
    .join('method_card', 'recipes.id', 'method_card.recipe_id')
    .where('recipes.id', id)
    .join('method', 'method_card.method_id', 'method.id')
    .select(
      'method_card.id as id',
      'method_card.recipe_id as recipeId',
      'method_card.method_id as methodId ',
      'method_card.step as step',
      'method.method as method',
      'method.note as methodNote',
    )
}
// *** ^ DONE ***

//CREATE

// export async function createNewRecipeIngredients(
//   newIngredients: AllIngredients,
// ) {
//   const { type, description, staple, quantity, unit, note } = newIngredients
//   return await connection('ingredients').insert({
//     type,
//     description,
//     staple,
//     quantity,
//     unit,
//     note,
//   })
// }

// export async function createNewRecipeMacros(newMacros: AllMacros) {
//   const { name, quantity, unit } = newMacros
//   return await connection('recipe').insert({ name, quantity, unit })
// }

// export async function createNewRecipeMethod(newMethod: AllMethods) {
//   const { method, note, step } = newMethod
//   return await connection('method').insert({
//     method,
//     note,
//     step,
//   })
// }

// export async function createNewRecipe(newRecipe: Recipe) {
//   const {
//     title,
//     description,
//     image,
//     categoryId,
//     favourite,
//     cookTime,
//     prepTime,
//     servings,
//   } = newRecipe

//   return await connection('recipe').insert({
//     title,
//     description,
//     image,
//     categoryId,
//     favourite,
//     cookTime,
//     prepTime,
//     servings,
//   })
// }

// //UPDATE

// export async function updateRecipe(updatedRecipe: RecipesFullList) {
//   const updateFields = await connection('recipe')
//     .where('recipe.id', updateId)
//     .select(
//       'recipe.title as recipeTitle',
//       'recipe.description as recipeDescription',
//       'recipe.cook_time as cookTime',
//       'recipe.prep_time as prepTime',
//       'recipe.servings as servings',
//       'recipe.image as recipeImage',
//       'ingredients_card.quantity as ingredientQuantity',
//       'ingredients_card.unit as ingredientUnit',
//       'ingredients_card.note as ingredientNote',
//       'ingredients.description as ingredientDescription',
//       'macros_card.quantity as macrosQuantity',
//       'macros_card.unit as macrosUnit',
//       'macros.name as macrosName',
//       'method_card.step as step',
//       'method.method as method',
//       'method.note as methodNote',
//     )
//     .first()
//     .update({
//       recipeTitle: updatedRecipe.recipe.title,
//       recipeDescription: updatedRecipe.recipe.description,
//       cookTime: updatedRecipe.recipe.cook_time,
//       prepTime: updatedRecipe.recipe.prep_time,
//       servings: updatedRecipe.recipe.servings,
//       recipeImage: updatedRecipe.recipe.image,
//       ingredientQuantity: updatedRecipe.ingredients_card.quantity,
//       ingredientUnit: updatedRecipe.ingredients_card.unit,
//       ingredientNote: updatedRecipe.ingredients_card.note,
//       ingredientDescription: updatedRecipe.ingredients.description,
//       macrosQuantity: updatedRecipe.macros_card.quantity,
//       macrosUnit: updatedRecipe.macros_card.unit,
//       macrosName: updatedRecipe.macros.name,
//       step: updatedRecipe.method_card.step,
//       method: updatedRecipe.method.method,
//       methodNote: updatedRecipe.method.note,
//     })
//   return updateFields
// }

// //DELETE

// export async function deleteRecipe(id: number): Promise<Recipe> {
//   return await connection('recipe').where('recipe.id', id).delete()
// }
