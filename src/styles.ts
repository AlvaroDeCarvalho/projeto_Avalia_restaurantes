import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
`
export const cores = {
  salmaoClaro: '#FFEBD9',
  Salmao: '#E66767',
  branca: '#FFFFFF'
}

export default GlobalStyles
