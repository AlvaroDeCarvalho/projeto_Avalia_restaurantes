import * as S from './styles'

import { ObjectStore } from '../../pages/Home'

type Props = {
  imagem: string
  title: string
  description: string
  store: ObjectStore
}

const ItemLoja = ({ description, imagem, title }: Props) => {
  return (
    <>
      <S.Card>
        <img src={imagem} />

        <div>
          <h3>{title}</h3>

          <p>{description}</p>
        </div>
        <S.Botao>Adicionar Carrinho </S.Botao>
      </S.Card>
    </>
  )
}

export default ItemLoja
