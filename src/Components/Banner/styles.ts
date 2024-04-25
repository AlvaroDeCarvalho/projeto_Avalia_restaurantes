import styled from 'styled-components'
import Banner from '../../assents/image/imagemdefundo.png'
import { cores } from '../../styles'
export const BannerContainer = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
  margin-bottom: 56px;
`

export const ElementContainer = styled.div`
  display: inline-block;
  margin-top: 24px;

  p {
    margin-bottom: 150px;
    font-size: 32px;
    color: ${cores.branca};
    font-weight: 100;
  }
  h2 {
    color: ${cores.branca};
    font-size: 32px;
    font-weight: 900;
  }
`
