import express from 'express'
import * as Path from 'node:path'

import listRoutes from './routes/lists.ts'
import recipeRoutes from './routes/recipes.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/categories', listRoutes)
server.use('/api/v1/recipes/', recipeRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
