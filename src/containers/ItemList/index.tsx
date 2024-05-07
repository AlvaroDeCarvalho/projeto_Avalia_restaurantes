import ItemLoja from '../../Components/ItemLoja'
import { ObjectStore } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurante: ObjectStore[]
}

const ItemList = ({ restaurante }: Props) => {
  return (
    <>
      <div className="container">
        <S.ContainerItensList>
          {restaurante.map((props) => (
            <ItemLoja
              key={props.id}
              title={props.cardapio.nome}
              imagem={props.cardapio.foto}
              description={props.cardapio.descricao}
            />
          ))}
        </S.ContainerItensList>
      </div>
    </>
  )
}

export default ItemList
