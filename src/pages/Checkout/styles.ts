import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assents/image/lixeira-card.png'

export const itemCarrinho = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: ${cores.salmaoClaro};
  color: ${cores.Salmao};
  padding: 12px 8px;
  img {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      margin: 8px 0px;
    }
  }
`

export const Delete = styled.button`
  position: absolute;
  background-image: url(${lixeira});
  background-size: cover;
  width: 16px;
  height: 16px;
  border: none;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`

export const FinalContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  color: ${cores.branca};
`
