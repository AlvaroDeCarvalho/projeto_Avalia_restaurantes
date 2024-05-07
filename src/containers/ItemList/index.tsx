import ItemLoja from '../../Components/ItemLoja'
import { ObjectStore } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurante: ObjectStore
}

const ItemList = ({ restaurante }: Props) => {
  return (
    <>
      <div className="container">
        <S.ContainerItensList>
          {restaurante.cardapio.map((props) => (
            <ItemLoja
              key={props.id}
              title={props.nome}
              imagem={props.foto}
              description={props.descricao}
            />
          ))}
        </S.ContainerItensList>
      </div>
    </>
  )
}

export default ItemList
