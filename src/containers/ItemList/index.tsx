import { useState } from 'react'
import ItemLoja from '../../Components/ItemLoja'
import { doneDescription } from '../../Components/Loja'
import { ObjectStore } from '../../pages/Home'
import * as S from './styles'
import closeImage from '../../assents/close.png'
type Props = {
  restaurante: ObjectStore
}
interface ModelState {
  isVisible: boolean
  url: string
}
const ItemList = ({ restaurante }: Props) => {
  const [model, setModel] = useState<ModelState>({
    isVisible: false,
    url: ''
  })
  const exitModal = () => {
    return setModel({
      isVisible: false,
      url: ''
    })
  }
  if (!restaurante.cardapio) {
    return <>Carregando...</>
  }

  return (
    <>
      <div className="container">
        <S.ContainerItensList>
          {restaurante.cardapio.map((props) => (
            <li
              key={props.id}
              onClick={() => setModel({ isVisible: true, url: props.foto })}
            >
              <ItemLoja
                title={props.nome}
                imagem={props.foto}
                description={doneDescription(props.descricao)}
              />
            </li>
          ))}
        </S.ContainerItensList>
      </div>
      <S.Modal className={model.isVisible ? 'active' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{restaurante.titulo}</h4>
            <img src={closeImage} onClick={() => exitModal()} />
          </header>
          <img src={model.url} alt="" />
        </S.ModalContent>
        <div className="overlay" onClick={() => exitModal()}></div>
      </S.Modal>
    </>
  )
}

export default ItemList
