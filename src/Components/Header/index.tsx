import { useState } from 'react'

import * as S from './styles'

import Logo from '../../assents/image/logo.png'
import carrinho from '../../assents//image/cart.svg'

import { useDispatch } from 'react-redux'
import { open } from '../../store/Reducer/cart'

type Props = {
  typeHeader: 'Home' | 'Cardapio'
}
const Header = ({ typeHeader }: Props) => {
  const [isMenuOpen] = useState(false)

  const dispatch = useDispatch()

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
                  0 <span>Produtos(s)</span>{' '}
                  <img src={carrinho} alt="" onClick={() => dispatch(open())} />
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
