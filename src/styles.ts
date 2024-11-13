import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmaoClaro: '#FFEBD9',
  Salmao: '#E66767',
  branca: '#FFFFFF',
  backgroundColor: '#fff8f2',
  backgroundColorFooter: '#FFEBD9'
}
const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
    .container {
      width: 1024px;
      margin: 0 auto;
    }
`

export default GlobalStyles
