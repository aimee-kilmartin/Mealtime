// import { useFruits } from '../hooks/useFruits.ts'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function App() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
