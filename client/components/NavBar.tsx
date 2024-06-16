import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <>
      <div>
        <Link to="/">
          {' '}
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to="/search">
          <button>Find</button>
        </Link>
      </div>
    </>
  )
}
