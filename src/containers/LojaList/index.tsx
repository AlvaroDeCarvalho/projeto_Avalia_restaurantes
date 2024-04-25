import * as S from './styles'

import ObjetoLoja from '../../models/ObjectLoja'
import Loja from '../../Components/Loja/index'
import imagemLoja from '../../assents/image/imagem.png'
const LojaList = () => {
  const arrayLojas: ObjetoLoja[] = [
    new ObjetoLoja(
      [],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      4.1,
      imagemLoja,
      1
    ),
    new ObjetoLoja(
      [],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      2.9,
      imagemLoja,
      2
    ),
    new ObjetoLoja(
      ['em breve'],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      3.9,
      imagemLoja,
      3
    ),
    new ObjetoLoja(
      ['em breve'],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      1.9,
      imagemLoja,
      4
    ),
    new ObjetoLoja(
      [],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      4.9,
      imagemLoja,
      5
    ),
    new ObjetoLoja(
      [],
      'japones',
      'Teteca Food',
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      4.9,
      imagemLoja,
      6
    )
  ]
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          {arrayLojas.map(
            ({
              title,
              image,
              description,
              infos,
              avaliacao,
              id
            }: ObjetoLoja) => (
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
