import GlobalStyles from './styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Header from './Components/Header'
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
