import GlobalStyles from './styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
