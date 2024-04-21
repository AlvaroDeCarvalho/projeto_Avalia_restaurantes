import styled from 'styled-components'
import BackgroundImage from '../../assents/image/Vectorlogo.png'
import { cores } from '../../styles'
export const Container = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: 360px;
  display: block;
`

export const Itens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin-top: 64px;
    margin-bottom: 128px;
  }
`

export const Text = styled.h2`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: ${cores.Salmao};
`
