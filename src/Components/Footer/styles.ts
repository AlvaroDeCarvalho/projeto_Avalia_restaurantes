import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.backgroundColorFooter};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const imgLogo = styled.img`
  margin-bottom: 24px;
  margin-top: 40px;
`
export const ContainerDescricao = styled.div`
  color: ${cores.Salmao};
  margin-top: 80px;
  margin-bottom: 40px;
`
export const ListPortifolio = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 16px;
  li {
    margin: 8px;
  }
`
