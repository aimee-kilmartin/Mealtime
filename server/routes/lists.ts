import { Router } from 'express'

import * as db from '../db/dbFunctions.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCategories()
    res.json({
      categories,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:category', async (req, res) => {
  try {
    const description = String(req.params.category)
    const category = await db.getRecipesByCategory(description)
    res.json(category)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
