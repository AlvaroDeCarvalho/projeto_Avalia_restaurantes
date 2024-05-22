import { useState } from 'react'
import ItemLoja from '../../Components/ItemLoja'
import { doneDescription } from '../../Components/Loja'
import { ObjectStore } from '../../pages/Home'
import * as S from './styles'
import closeImage from '../../assents/close.png'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/Reducer/cart'

type Props = {
  restaurante: ObjectStore
}

export type ItemSelection = {
  id: number
  foto: string
  nome: string
  descricao: string
  qntServe: string
  preco: number
}

interface ModelState {
  isVisible: boolean
  url: string
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ItemList = ({ restaurante }: Props) => {
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }
  const [item, setItem] = useState<ItemSelection>({
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    qntServe: '',
    preco: 0
  })
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
              onClick={() => {
                setModel({ isVisible: true, url: props.foto })
                setItem({
                  id: props.id,
                  foto: props.foto,
                  nome: props.nome,
                  descricao: props.descricao,
                  qntServe: props.porcao,
                  preco: props.preco
                })
              }}
            >
              <ItemLoja
                title={props.nome}
                imagem={props.foto}
                description={doneDescription(props.descricao)}
                store={restaurante}
              />
            </li>
          ))}
        </S.ContainerItensList>
      </div>
      <S.Modal className={model.isVisible ? 'active' : ''}>
        <S.ModalContent className="container">
          <header>
            <img src={closeImage} onClick={() => exitModal()} />
          </header>
          <tbody>
            <img src={model.url} alt="" />
            <div>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <p>Serve: de {item.qntServe}</p>
              <S.Botao onClick={addItemToCart}>
                adicionar o carrinho - {formatPrice(item.preco)}
              </S.Botao>
            </div>
          </tbody>
        </S.ModalContent>
        <div className="overlay" onClick={() => exitModal()}></div>
      </S.Modal>
    </>
  )
}

export default ItemList
