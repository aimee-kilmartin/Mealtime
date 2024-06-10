import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Recipe } from '../../models/recipes'

export function RecipeMiniCard(recipe: Recipe) {
  return (
    <>
      <div>
        <Link to={String(recipe.id)}>
          <h2>{recipe.title} </h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt=""></img>
        </Link>
      </div>
    </>
  )
}
