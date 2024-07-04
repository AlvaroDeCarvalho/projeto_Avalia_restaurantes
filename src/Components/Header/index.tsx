import { useState } from 'react'

import * as S from './styles'

import Logo from '../../assents/image/logo.png'
import carrinho from '../../assents//image/cart.png'
type Props = {
  typeHeader: 'Home' | 'Cardapio'
}
const Header = ({ typeHeader }: Props) => {
  const [isMenuOpen] = useState(false)
  console.log(isMenuOpen)

  if (typeHeader === 'Home') {
    return (
      <>
        <S.Container tamanho="big">
          <div className="container">
            <S.Itens>
              <img src={Logo} />
              <S.Text tamanho={isMenuOpen ? 'big' : 'small'}>
                Viva experiências gastronômicas <br /> no conforto da sua casa
              </S.Text>
            </S.Itens>
          </div>
        </S.Container>
      </>
    )
  } else {
    return (
      <>
        <S.Container tamanho="small">
          <div className="container">
            <S.ItensCarrinho>
              <S.Item>
                <S.LinkRestaurante to={'/'}>Restaurantes</S.LinkRestaurante>
                <S.ImagemLogo src={Logo} />
                <S.Text tamanho="small">
                  0 <span>produto(s) no carrinho</span>{' '}
                  <img src={carrinho} alt="" />
                </S.Text>
              </S.Item>
            </S.ItensCarrinho>
          </div>
        </S.Container>
      </>
    )
  }
}

export default Header
