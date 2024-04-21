import * as S from './styles'

import Loja from '../Loja/index'
import imagemLoja from '../../assents/image/imagem.png'
const LojaList = () => {
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          <Loja
            title="Teteca Food"
            image={imagemLoja}
            description="comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa "
            infos={['em breve', 'loja de otima qualidade']}
          />
          <Loja
            title="Teteca Food"
            image={imagemLoja}
            description="comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa "
            infos={['em breve', 'loja de otima qualidade']}
          />
        </S.List>
      </div>
    </S.ContainerList>
  )
}
export default LojaList
