import Logo from '../../assents/image/logo.png'
import * as S from './styles'

import faceLogo from '../../assents/image/facebook.png'
import instaLogo from '../../assents/image/instagram-round-svgrepo-com (1) 1.png'
import twiiterLogo from '../../assents/image/twitter-2-svgrepo-com 1.png'

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.imgLogo src={Logo} />

      <div>
        <S.ListPortifolio>
          <li>
            <a href="#">
              <img src={instaLogo} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={faceLogo} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twiiterLogo} />
            </a>
          </li>
        </S.ListPortifolio>
      </div>
      <S.ContainerDescricao>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.ContainerDescricao>
    </S.FooterContainer>
  )
}

export default Footer
