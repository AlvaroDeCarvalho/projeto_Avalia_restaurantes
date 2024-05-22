import { useSelector } from 'react-redux'
import * as S from './styles'
import { formatPrice } from '../containers/ItemList'
import { RootReducer } from '../store'
import { newItemSelect } from '../store/Reducer/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay />
      <S.SideBar>
        <h1>Cart</h1>
        <ul>
          {items.map((item: newItemSelect) => (
            <S.itemCarrinho key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button>Remover</button>
            </S.itemCarrinho>
          ))}
        </ul>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart