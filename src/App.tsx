import GlobalStyles from './styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import Footer from './Components/Footer'
import { Provider } from 'react-redux'
import store from './store/index'
import Checkout from './pages/Checkout'
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
          <Footer />
          <Checkout />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
