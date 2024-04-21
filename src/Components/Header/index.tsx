import * as S from './styles'
import Logo from '../../assents/image/logo.png'

const Header = () => {
  return (
    <>
      <S.Container>
        <div className="container">
          <S.Itens>
            <img src={Logo} />
            <S.Text>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </S.Text>
          </S.Itens>
        </div>
      </S.Container>
    </>
  )
}

export default Header
