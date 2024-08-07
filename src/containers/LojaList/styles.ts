import styled from 'styled-components'
import { TagContainer } from '../../Components/Tag/styled'
import { cores } from '../../styles'

export const ContainerList = styled.div`
  padding: 32px;
  background-color: ${cores.backgroundColor};
  ${TagContainer} {
    margin-left: 8px;
    position: relative;
  }
`
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
