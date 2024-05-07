import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branca};
  border: 1px solid ${cores.Salmao};
  color: ${cores.Salmao};
  position: relative;
  display: block;
  text-decoration: none;
`
export const LogoCard = styled.img`
  height: 250px;
  object-fit: cover;
  width: 100%;
`

export const ContainerAvalicao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin: 8px;
    p {
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
      margin-right: 8px;
    }
  }
`

export const ComponentsInfo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  padding: 8px 8px;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  margin-bottom: 8px;
`
