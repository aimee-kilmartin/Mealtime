import { Router } from 'express'

import * as db from '../db/dbFunctions.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const details = await db.getRecipeDetailsById(id)
    res.json(details)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.get('/:id', async (req, res) => {
//   try {
//     const id = Number(req.params.id)
//     const details = await db.getRecipeDetailsById(id)
//     const ingredients = await db.getRecipeIngredientsById(id)
//     const macros = await db.getRecipeMacrosById(id)
//     res.json({ ingredients, details, macros })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

// router.get('/:id', async (req, res) => {
//   try {
//     const id = Number(req.params.id)
//     const details = await db.getRecipeDetailsById(id)
//     const ingredients = await db.getRecipeIngredientsById(id)
//     const macros = await db.getRecipeMacrosById(id)
//     res.json({ ingredients, details, macros })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

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
