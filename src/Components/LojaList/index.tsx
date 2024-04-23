import * as S from './styles'

import ObjetoLoja from '../../models/ObjectLoja'
import Loja from '../Loja/index'
import imagemLoja from '../../assents/image/imagem.png'
const LojaList = () => {
  const arrayLojas: ObjetoLoja[] = [
    {
      title: 'Teteca Food',
      image: imagemLoja,
      description:
        'comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa ',
      infos: ['em breve', 'japones'],
      avaliacao: 4.9,
      id: 1
    },
    {
      title: 'Teteca Food',
      image: imagemLoja,
      description:
        'comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa ',
      infos: ['em breve', 'japones'],
      avaliacao: 4.9,
      id: 2
    },
    {
      title: 'Teteca Food',
      image: imagemLoja,
      description:
        'comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa ',
      infos: ['em breve', 'japones'],
      avaliacao: 4.9,
      id: 3
    },
    {
      title: 'Teteca Food',
      image: imagemLoja,
      description:
        'comida japonesa da melhor qualidade, venha nos conhecer presencialmente aqui na cidade de joão pessoa ',
      infos: ['em breve', 'japones'],
      avaliacao: 4.9,
      id: 4
    }
  ]
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          {arrayLojas.map(
            ({ title, image, description, infos, avaliacao, id }) => (
              <Loja
                title={title}
                key={id}
                image={image}
                avaliacao={avaliacao}
                description={description}
                infos={infos}
              />
            )
          )}
        </S.List>
      </div>
    </S.ContainerList>
  )
}
export default LojaList
