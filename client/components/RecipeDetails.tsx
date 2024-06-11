interface Props {
  cookTime: number
  prepTime: number
  servings: number
  creationDate: string
  id: number
  title: string
  description: string
  image: string
  categoryId: number
  favourite: boolean
}

export function RecipeDetails(data: Props) {
  if (data)
    return (
      <>
        <p>Recipe Description</p>
        {console.log('data', data)}
        {console.log('title', data.title)}
        <>
          <div>
            <h2>{data.cookTime}</h2>
            <p>p</p>
            <div>{/* <img src={recipe} alt="" /> */}</div>
          </div>
        </>
      </>
    )
}
