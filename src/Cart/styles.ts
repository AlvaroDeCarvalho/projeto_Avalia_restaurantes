import styled from 'styled-components'
import { cores } from '../styles'
import { Botao } from '../Components/ItemLoja/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  display: none;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.Salmao};
  height: 100%;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 40px 16px 0 16px;

  ${Botao} {
    width: 100%;
  }
`
export const itemCarrinho = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

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
    flex: 1;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 4px;
    }

    p {
      font-size: 1rem;
    }
  }
`
