import { Router } from 'express'

import * as db from '../db/dbFunctions.ts'

const router = Router()

router.get('/allRecipes', async (req, res) => {
  try {
    const recipes = await db.getAllRecipes()
    res.json(recipes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/allIngredients', async (req, res) => {
  try {
    const ingredients = await db.getAllIngredientsCards()
    res.json(ingredients)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/details', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const details = await db.getRecipeDetailsById(id)
    res.json(details)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/macros', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const macros = await db.getRecipeMacrosById(id)
    res.json(macros)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/ingredients', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const ingredients = await db.getRecipeIngredientsById(id)
    res.json(ingredients)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/method', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const steps = await db.getRecipeStepsById(id)
    res.json(steps)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
