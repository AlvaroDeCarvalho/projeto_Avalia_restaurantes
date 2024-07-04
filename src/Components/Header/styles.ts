import styled from 'styled-components'
import BackgroundImage from '../../assents/image/Vectorlogo.png'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  tamanho: 'big' | 'small'
}

export const Container = styled.div<Props>`
  position: relative;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: ${(props) => (props.tamanho === 'big' ? '360px' : '180px')};
  display: block;
`
export const LinkRestaurante = styled(Link)`
  color: ${cores.Salmao};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`
export const Itens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin-top: 64px;
    margin-bottom: 128px;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 90px;
      height: 60px;
      object-fit: contain;
      margin-top: 32px;
      margin-bottom: 64px;
    }
  }
`

export const ItensCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 36px;
    margin-bottom: 64px;
  }
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`
export const Text = styled.h2<Props>`
  font-size: ${(props) => (props.tamanho === 'big' ? '36px' : '18px')};
  font-weight: bold;
  line-height: ${(props) => (props.tamanho === 'big' ? '36px' : '22px')};
  color: ${cores.Salmao};
`

export const Item = styled.div`
  ${LinkRestaurante} {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`
export const ImagemLogo = styled.img`
  @media (max-width: 768px) {
    width: 90px;
    height: 60px;
    object-fit: contain;
  }
`
