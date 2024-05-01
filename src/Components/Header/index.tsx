import * as S from './styles'
import Logo from '../../assents/image/logo.png'
type Props = {
  typeHeader: 'Home' | 'Cardapio'
}
const Header = ({ typeHeader }: Props) => {
  if (typeHeader === 'Home') {
    return (
      <>
        <S.Container tamanho="big">
          <div className="container">
            <S.Itens>
              <img src={Logo} />
              <S.Text tamanho="big">
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
              <div>
                <S.LinkRestaurante to={'/'}>Restaurantes</S.LinkRestaurante>
                <img src={Logo} />
                <S.Text tamanho="small">0 produto(s) no corrinho</S.Text>
              </div>
            </S.ItensCarrinho>
          </div>
        </S.Container>
      </>
    )
  }
}

export default Header
