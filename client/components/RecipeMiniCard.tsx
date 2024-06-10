import { Link } from 'react-router-dom'
import { Recipe } from '../../models/recipes'

export function RecipeMiniCard(recipe: Recipe) {
  {
    console.log(recipe.image)
  }
  return (
    <>
      <div>
        <Link to={`/recipes/${recipe.title}`}>
          <h2>{recipe.title} </h2>
          <p>{recipe.description}</p>
        </Link>
        <div>
          <img src={recipe.image} alt="" />
        </div>
      </div>
    </>
  )
}
