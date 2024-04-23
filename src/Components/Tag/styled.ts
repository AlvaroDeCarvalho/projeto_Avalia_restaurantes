import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const TagContainer = styled.div`
  background-color: ${cores.Salmao};
  display: inline-block;
  color: ${cores.salmaoClaro};
  padding: 6px 4px;
`
export const TagContainerButton = styled(Link)`
  background-color: ${cores.Salmao};
  display: inline-block;
  color: ${cores.salmaoClaro};
  padding: 6px 4px;
  margin: 8px;
`
