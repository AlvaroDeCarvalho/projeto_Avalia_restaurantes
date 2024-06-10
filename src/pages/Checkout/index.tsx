import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import SideBarComponent from '../../Components/SideBarComponent'
import { newItemSelect, remove } from '../../store/Reducer/cart'
import { Botao } from '../../Components/ItemLoja/styles'
import { formatPrice } from '../../containers/ItemList'

import { RootReducer } from '../../store'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [stateCheckoutCart, setStateCheckout] = useState(true)
  const [stateCheckoutAdress, setStateCheckoutAdress] = useState(false)
  const [behovior, setBehovior] = useState(false)
  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <SideBarComponent>
      {!behovior ? (
        <>
          {stateCheckoutCart ? (
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
                <p>
                  {formatPrice(
                    items.reduce((acc, item) => acc + item.preco, 0)
                  )}
                </p>
              </S.FinalContainer>
              <Botao onClick={() => setStateCheckout(false)}>
                Continuar com a entrega
              </Botao>
            </>
          ) : (
            <>
              {!stateCheckoutAdress ? (
                <>
                  <S.FormContainer>
                    <h2>Entrega</h2>
                    <S.InputGrup>
                      <label htmlFor="client">Nome de quem ira receber</label>
                      <input type="text" id="client" />
                    </S.InputGrup>

                    <S.InputGrup>
                      <label htmlFor="address">Endereço</label>
                      <input type="text" id="address" />
                    </S.InputGrup>

                    <S.InputGrup>
                      <label htmlFor="city">Cidade</label>
                      <input type="text" id="city" />
                    </S.InputGrup>

                    <div className="adressContainer">
                      <S.InputGrup>
                        <label htmlFor="cep">Cep</label>
                        <input type="text" id="cep" />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="number">Numero</label>
                        <input type="text" id="number" />
                      </S.InputGrup>
                    </div>
                    <S.InputGrup>
                      <label htmlFor="complement">
                        Complemento opcional &#10098; opcional &#10099;
                      </label>
                      <input type="text" id="complement" />
                    </S.InputGrup>
                  </S.FormContainer>
                  <S.ButtonContainer>
                    <Botao onClick={() => setStateCheckoutAdress(true)}>
                      Continuar com o pagamento
                    </Botao>
                    <Botao onClick={() => setStateCheckout(true)}>
                      voltar para o carrinho
                    </Botao>
                  </S.ButtonContainer>
                </>
              ) : (
                <>
                  <h1>Pagamento</h1>
                  <button onClick={() => setBehovior(true)}>Clique aqui</button>
                  <button onClick={() => setStateCheckoutAdress(false)}>
                    Voltar
                  </button>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <h1>Obrigado por assistir </h1>
        </>
      )}
    </SideBarComponent>
  )
}

export default Checkout
