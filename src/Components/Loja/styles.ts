import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.Salmao};
  position: relative;
`
export const ComponentsInfo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
