import { Link } from 'react-router-dom'
import { Recipe } from '../../models/recipes'

export function RecipeMiniCard(recipe: Recipe) {
  return (
    <>
      <div>
        <Link to={`/recipes/${recipe.id}`}>
          <h2>{recipe.title} </h2>
        </Link>
        <div>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt="" />
        </div>
      </div>
    </>
  )
}
