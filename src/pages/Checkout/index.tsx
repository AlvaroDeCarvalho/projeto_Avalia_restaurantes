import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import SideBarComponent from '../../Components/SideBarComponent'
import { newItemSelect, remove } from '../../store/Reducer/cart'
import { Botao } from '../../Components/ItemLoja/styles'
import { formatPrice } from '../../containers/ItemList'

import { RootReducer } from '../../store'
import { close } from '../../store/Reducer/cart'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [stateCheckoutCart, setStateCheckout] = useState(true)
  const [stateCheckoutAdress, setStateCheckoutAdress] = useState(false)
  const [behovior, setBehovior] = useState(false)
  const navigate = useNavigate()

  const closeOverlay = () => {
    dispatch(close())
  }

  const deleteItem = (id: number) => {
    dispatch(remove(id))
  }

  const concluded = () => {
    navigate('/')
    closeOverlay()
    setStateCheckout(true)
    setBehovior(false)
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
                  <S.FormContainer>
                    <h2>
                      Pagamento - valor:{' '}
                      {formatPrice(
                        items.reduce((acc, item) => acc + item.preco, 0)
                      )}
                    </h2>
                    <S.InputGrup>
                      <label htmlFor="clientCard">Nome no cartao</label>
                      <input type="text" id="clientCard" />
                    </S.InputGrup>

                    <div className="cardNumberContainer">
                      <S.InputGrup>
                        <label htmlFor="cardNumber">Numero do cartão</label>
                        <input type="text" id="cardNumber" />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" />
                      </S.InputGrup>
                    </div>
                    <div className="cardContainerDate">
                      <S.InputGrup>
                        <label htmlFor="dueMonth">mes do vencimento</label>
                        <input type="text" id="dueMonth" />
                      </S.InputGrup>

                      <S.InputGrup>
                        <label htmlFor="duoYear">Ano de vencimento</label>
                        <input type="text" id="duoYear" />
                      </S.InputGrup>
                    </div>
                  </S.FormContainer>
                  <S.ButtonContainer>
                    <Botao onClick={() => setBehovior(true)}>
                      Finalizar pagamento
                    </Botao>
                    <Botao onClick={() => setStateCheckoutAdress(false)}>
                      voltar para a edição de endereço
                    </Botao>
                  </S.ButtonContainer>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <S.BehaviorContainer>
            <h2>Pedido realizado - 10043</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.BehaviorContainer>
          <Botao onClick={concluded}>Concluir</Botao>
        </>
      )}
    </SideBarComponent>
  )
}

export default Checkout
