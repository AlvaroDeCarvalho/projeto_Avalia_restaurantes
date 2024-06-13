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
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [stateCheckoutCart, setStateCheckout] = useState(true)
  const [stateCheckoutAdress, setStateCheckoutAdress] = useState(false)
  const navigate = useNavigate()

  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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
  }
  const form = useFormik({
    initialValues: {
      client: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      clientCard: '',
      cardNumber: '',
      cvv: '',
      dueMonth: '',
      dueYear: ''
    },
    validationSchema: Yup.object({
      client: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string()
        .min(3, 'nome incompleto')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'cep incompleto')
        .max(9, 'cep exedeu o numero de caracteres')
        .required('Campo obrigatório'),
      number: Yup.string()
        .max(5, 'numero exedeu o permitido')
        .required('Campo obrigatório'),
      complement: Yup.string().optional(),

      clientCard: Yup.string().when((values, schema) => {
        return stateCheckoutAdress
          ? schema.required('Campo obrigatório')
          : schema
      }),
      cardNumber: Yup.string().when((values, schema) => {
        return stateCheckoutAdress
          ? schema.required('Campo obrigatório')
          : schema
      }),
      cvv: Yup.string().when((values, schema) => {
        return stateCheckoutAdress
          ? schema.required('Campo obrigatório')
          : schema
      }),
      dueMonth: Yup.string().when((values, schema) => {
        return stateCheckoutAdress
          ? schema.required('Campo obrigatório')
          : schema
      }),
      dueYear: Yup.string().when((values, schema) => {
        return stateCheckoutAdress
          ? schema.required('Campo obrigatório')
          : schema
      })
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.client,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.clientCard,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: 12,
              year: 2024
            }
          }
        },
        items: [{ id: 1, price: 100 }]
      })
    }
  })

  const getMessageError = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isError = field in form.errors

    if (isTouched && isError) return message
    return ''
  }
  return (
    <SideBarComponent>
      {!isSuccess ? (
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
                  <S.FormContainer onSubmit={form.handleSubmit}>
                    <h2>Entrega</h2>
                    <S.InputGroup>
                      <label htmlFor="client">Nome de quem ira receber</label>
                      <input
                        type="text"
                        id="client"
                        value={form.values.client}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getMessageError('client', form.errors.client)}
                      </small>
                    </S.InputGroup>

                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        type="text"
                        id="address"
                        value={form.values.address}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />

                      <small>
                        {getMessageError('address', form.errors.address)}
                      </small>
                    </S.InputGroup>

                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        type="text"
                        id="city"
                        value={form.values.city}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />

                      <small>{getMessageError('city', form.errors.city)}</small>
                    </S.InputGroup>

                    <div className="adressContainer">
                      <S.InputGroup>
                        <label htmlFor="cep">cep</label>
                        <input
                          type="text"
                          id="cep"
                          value={form.values.cep}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />

                        <small>{getMessageError('cep', form.errors.cep)}</small>
                      </S.InputGroup>

                      <S.InputGroup>
                        <label htmlFor="number">Numero</label>
                        <input
                          type="text"
                          id="number"
                          value={form.values.number}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />

                        <small>
                          {getMessageError('number', form.errors.number)}
                        </small>
                      </S.InputGroup>
                    </div>
                    <S.InputGroup>
                      <label htmlFor="complement">
                        Complemento opcional &#10098; opcional &#10099;
                      </label>
                      <input
                        type="text"
                        id="complement"
                        value={form.values.complement}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getMessageError('complement', form.errors.complement)}
                      </small>
                    </S.InputGroup>
                  </S.FormContainer>
                  <S.ButtonContainer>
                    <Botao
                      onClick={() => {
                        setStateCheckoutAdress(true)
                        form.handleSubmit()
                      }}
                    >
                      Continuar com o pagamento
                    </Botao>
                    <Botao
                      onClick={() => {
                        setStateCheckout(true)
                      }}
                    >
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
                    <S.InputGroup>
                      <label htmlFor="clientCard">Nome no cartao</label>
                      <input
                        type="text"
                        id="clientCard"
                        value={form.values.clientCard}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getMessageError('clientCard', form.errors.clientCard)}
                      </small>
                    </S.InputGroup>

                    <div className="cardNumberContainer">
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Numero do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          value={form.values.cardNumber}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />

                        <small>
                          {getMessageError(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>

                      <S.InputGroup>
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          value={form.values.cvv}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />

                        <small>{getMessageError('cvv', form.errors.cvv)}</small>
                      </S.InputGroup>
                    </div>
                    <div className="cardContainerDate">
                      <S.InputGroup>
                        <label htmlFor="dueMonth">mes do vencimento</label>
                        <input
                          type="text"
                          id="dueMonth"
                          value={form.values.dueMonth}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />
                        <small>
                          {getMessageError('dueMonth', form.errors.dueMonth)}
                        </small>
                      </S.InputGroup>

                      <S.InputGroup>
                        <label htmlFor="dueYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="dueYear"
                          value={form.values.dueYear}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                        />

                        <small>
                          {getMessageError('dueYear', form.errors.dueYear)}
                        </small>
                      </S.InputGroup>
                    </div>
                  </S.FormContainer>
                  <S.ButtonContainer>
                    <Botao onClick={() => form.handleSubmit()}>
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
            <h2>Pedido realizado - {data ? data.orderId : ''}</h2>
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
