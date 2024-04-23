import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Cardapio from './pages/Cardapio'

const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/cardapio'} element={<Cardapio />} />
    </Routes>
  )
}
export default Router
