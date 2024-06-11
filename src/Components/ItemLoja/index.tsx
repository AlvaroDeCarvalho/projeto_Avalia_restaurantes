import * as S from './styles'

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
        <S.Botao>Mais detalhes </S.Botao>
      </S.Card>
    </>
  )
}

export default ItemLoja
