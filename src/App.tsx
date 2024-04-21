import GlobalStyles from './styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
