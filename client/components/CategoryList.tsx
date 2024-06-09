import { Link } from 'react-router-dom'
import { RecipeMiniCard } from './RecipeMiniCard'

export function CategoryList() {
  const recipe = RecipeMiniCard()
  return (
    <>
      <ul>
        {recipe.map((recipes) => (
          <RecipeMiniCard key={recipes.id} {...recipe} />
        ))}
      </ul>
    </>
  )
}

//export function getJobs(): Promise<Job[]> {
// return request.get(rootUrl + '/jobs').then((res) => {
//   return res.body
// })
// {data && data.map((job) => <JobCard key={job.id} {...job} />)}
