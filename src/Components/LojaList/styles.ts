import styled from 'styled-components'
import { TagContainer } from '../Tag/styled'
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 28px;
`
