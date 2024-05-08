import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  backgroundCover: string
}

export const BannerContainer = styled.div<Props>`
  position: relative;
  background-image: url(${(props) => props.backgroundCover});
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
  margin-bottom: 56px;
  .container {
    position: relative;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
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
