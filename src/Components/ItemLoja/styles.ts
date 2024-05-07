import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.Salmao};
  padding: 8px;
  color: ${cores.salmaoClaro};
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  div {
    h3 {
      font-weight: 900;
      font-size: 16px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
export const Botao = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  width: 100%;
  background-color: ${cores.salmaoClaro};
  color: ${cores.Salmao};
`
