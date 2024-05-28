import { useDispatch, useSelector } from 'react-redux'
import SideBarComponent from '../../Components/SideBarComponent'
import { newItemSelect, remove } from '../../store/Reducer/cart'
import { RootReducer } from '../../store'
import { formatPrice } from '../../containers/ItemList'
import * as S from './styles'
import { Botao } from '../../Components/ItemLoja/styles'
const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <SideBarComponent>
      <>
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
      </>
    </SideBarComponent>
  )
}

export default Checkout
