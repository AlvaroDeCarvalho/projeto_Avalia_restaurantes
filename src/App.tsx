import GlobalStyles from './styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
