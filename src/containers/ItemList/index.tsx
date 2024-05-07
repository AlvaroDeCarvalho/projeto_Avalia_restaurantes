import ItemLoja from '../../Components/ItemLoja'
import { doneDescription } from '../../Components/Loja'
import { ObjectStore } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurante: ObjectStore
}

const ItemList = ({ restaurante }: Props) => {
  if (!restaurante.cardapio) {
    return <>Carregando...</>
  }

  return (
    <>
      <div className="container">
        <S.ContainerItensList>
          {restaurante.cardapio.map((props) => (
            <>
              <li key={props.id}>
                <ItemLoja
                  title={props.nome}
                  imagem={props.foto}
                  description={doneDescription(props.descricao)}
                />
              </li>
            </>
          ))}
        </S.ContainerItensList>
      </div>
    </>
  )
}

export default ItemList
