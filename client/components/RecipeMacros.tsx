interface Props {
  id: number
  recipeId: number
  macrosId: number
  quantity: number
  unit: string
}

export function RecipeMacros(data: Props) {
  if (data)
    return (
      <>
        <p>Recipe Macros</p>
        {console.log('macrodata', data)}
        {console.log('quan', data.quantity)}
        <>
          <div>
            <h2>{data.unit}</h2>
            <p>p</p>
            <div>{/* <img src={recipe} alt="" /> */}</div>
          </div>
        </>
      </>
    )
}
