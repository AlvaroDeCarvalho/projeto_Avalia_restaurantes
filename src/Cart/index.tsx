import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { formatPrice } from '../containers/ItemList'
import { RootReducer } from '../store'
import { newItemSelect } from '../store/Reducer/cart'

import { close, remove } from '../store/Reducer/cart'

import { Botao } from '../Components/ItemLoja/styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeOverlay = () => {
    dispatch(close())
  }

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeOverlay} />
      <S.SideBar>
        <ul>
          {items.map((item: newItemSelect) => (
            <S.itemCarrinho key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
                <S.Delete onClick={() => deleteItem(item.id)} />
              </div>
            </S.itemCarrinho>
          ))}
        </ul>
        <S.FinalContainer>
          <h4>Valor total</h4>
          <p>{formatPrice(items.reduce((acc, item) => acc + item.preco, 0))}</p>
        </S.FinalContainer>
        <Botao>Continuar com a entrega</Botao>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
