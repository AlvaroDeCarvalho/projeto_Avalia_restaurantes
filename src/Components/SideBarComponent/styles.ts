import styled from 'styled-components'
import { cores } from '../../styles'
import { Botao } from '../ItemLoja/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
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
    font-weight: bold;
    width: 100%;
  }
`
