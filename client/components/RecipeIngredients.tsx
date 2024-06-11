interface Props {
  id: number
  recipeId: number
  ingredientsId: number
  quantity: string
  unit: string
  note: string
}

export function RecipeIngredients(data: Props) {
  if (data)
    return (
      <>
        <p>Recipe Ingredients</p>
        {console.log('ing', data)}
        <>
          <div>
            {/* <h2>{data.ingredients.id} </h2> */}
            {/* <p>{}</p> */}
            <div>{/* <img src={} alt="" /> */}</div>
          </div>
        </>
      </>
    )
}
