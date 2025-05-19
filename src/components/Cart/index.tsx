import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'
import { useFormik } from 'formik'
import MaskedInput from "react-text-mask";


import { close, remove } from "../../store/reducers/cart"
import { usePurchaseMutation } from "../../services/api"
import { RootReducer } from "../../store"
import { clear } from '../../store/reducers/cart'


import { formatPrice } from "../Modal"

import { CartContainer, CartItem, Garbage, Overlay, Sidebar, TotalContainer, Warning } from "./styles"

const Cart = () => {
  const [purchase, { data, isSuccess, isLoading, reset }] = usePurchaseMutation()
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [ continueShopping, setContinueShopping ] = useState(false)
  const [ continuePayment, setContinuePayment ] = useState(false)

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const form = useFormik ({
    initialValues: {
      fullName: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryCep: '',
      deliveryNumber: '',
      deliveryComplement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5).required(),
      deliveryAddress: Yup.string().min(5).required(),
      deliveryCity: Yup.string().min(5).required(),
      deliveryCep: Yup.string().length(9).required(),
      deliveryNumber: Yup.string().max(6).required(),
      deliveryComplement: Yup.string(),

      cardOwner: Yup.string().when((_values, schema) =>
        continuePayment ? schema.required() : schema
      ),
      cardNumber: Yup.string().length(19).when((_values, schema) =>
        continuePayment ? schema.required() : schema
      ),
      cardCode: Yup.string().length(3).when((_values, schema) =>
        continuePayment ? schema.required() : schema
      ),
      expiresMonth: Yup.string().length(2).when((_values, schema) =>
        continuePayment ? schema.required() : schema
      ),
      expiresYear: Yup.string().length(2).when((_values, schema) =>
        continuePayment ? schema.required() : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.deliveryAddress,
            city: values.deliveryCity,
            zipCode: values.deliveryCep,
            number: Number(values.deliveryNumber),
            complement: values.deliveryComplement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
  const isTouched = fieldName in form.touched
  const isInvalid = fieldName in form.errors
  const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      }
    }, [isSuccess, dispatch])

  const closeCartAfterOrder = () => {
    dispatch(clear());
    dispatch(close());
    form.resetForm()
    reset()
    setContinueShopping(false)
    setContinuePayment(false)
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={() => !isSuccess && closeCart()} />
      <Sidebar>
        {isSuccess && data ? (
          <>
          <h4 className="success">Pedido realizado - {data.orderId}</h4>
            <p className="successMessage">
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="successMessage">
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </p>
            <p className="successMessage">
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </p>
            <p className="successMessage">
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>
            <button onClick={closeCartAfterOrder}>Concluir</button>
          </>
        ): items.length === 0 ? (
          <Warning>
            <svg onClick={closeCart} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/>
            </svg>
            <p>Carrinho vazio</p>
          </Warning>
        ) : !continueShopping ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <span>{formatPrice(item.preco)}</span>
                    <Garbage onClick={() => removeItem(item.id)} />
                  </div>
                </CartItem>
              ))}
            </ul>
            <TotalContainer>
              <p>Valor Total</p>
              <span>{formatPrice(getTotalPrice())}</span>
            </TotalContainer>
            <button onClick={() => setContinueShopping(true)}>Continuar com a entrega</button>
          </>
        ) : (
          <>
              <form onSubmit={form.handleSubmit}>
                { !continuePayment ? (
                  <>
                  <h4>Entrega</h4>
                  {Object.keys(form.errors).length > 0 && (
                  <small className="messageError">
                    * Verifique os dados e tente novamente.
                  </small>
                  )}
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input id="fullName" name="fullName" type="text" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('fullName') ? 'error' : ''}/>
                  <label htmlFor="deliveryAddress">Endereço</label>
                  <input id="deliveryAddress" type="text" name="deliveryAddress" value={form.values.deliveryAddress} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryAddress') ? 'error' : ''}/>
                  <label htmlFor="deliveryCity">Cidade</label>
                  <input id="deliveryCity" type="text" name="deliveryCity" value={form.values.deliveryCity} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryCity') ? 'error' : ''}/>
                    <div className="inputRow">
                      <div className="inputGroup">
                        <label htmlFor="deliveryCep">CEP</label>
                        <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]} id="deliveryCep" type="text" name="deliveryCep" value={form.values.deliveryCep} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryCep') ? 'error' : ''}/>
                      </div>
                      <div className="inputGroup">
                        <label htmlFor="deliveryNumber">Número</label>
                        <input id="deliveryNumber" type="text" name="deliveryNumber" value={form.values.deliveryNumber} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryNumber') ? 'error' : ''}/>
                      </div>
                    </div>
                  <label htmlFor="deliveryComplement">Complemento (opcional)</label>
                  <input id="deliveryComplement" type="text" name="deliveryComplement" value={form.values.deliveryComplement} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryComplement') ? 'error' : ''}/>
                  <div className="buttonGroup">
                    <button onClick={() => setContinuePayment(true)} type="button">Continuar com o pagamento</button>
                    <button onClick={() => setContinueShopping(false)} type="button">Voltar para o carrinho</button>
                  </div>
                  </>
                ) : (
                  <>
                    <h4>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h4>
                    {Object.keys(form.errors).length > 0 && (
                    <small className="messageError">
                      * Verifique os dados e tente novamente.
                    </small>
                    )}
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input id="cardOwner" type="text" name="cardOwner" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardOwner') ? 'error' : ''}/>
                      <div className="inputRow">
                        <div className="inputGroup cardNumber">
                          <label htmlFor="cardNumber">Número do cartão</label>
                          <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]} id="cardNumber" type="text" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardNumber') ? 'error' : ''}/>
                        </div>
                        <div className="inputGroup cvv">
                          <label htmlFor="cardCode">CVV</label>
                          <MaskedInput mask={[/\d/, /\d/, /\d/]}  id="cardCode" type="text" name="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardCode') ? 'error' : ''}/>
                        </div>
                      </div>
                      <div className="inputRow">
                        <div className="inputGroup">
                          <label htmlFor="expiresMonth">Mês de vencimento</label>
                          <MaskedInput mask={[/\d/, /\d/]} id="expiresMonth" type="text" name="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('expiresMonth') ? 'error' : ''}/>
                        </div>
                        <div className="inputGroup">
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <MaskedInput mask={[/\d/, /\d/]} min={2} id="expiresYear" type="text" name="expiresYear" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('expiresYear') ? 'error' : ''}/>
                        </div>
                      </div>
                    <div className="buttonGroup">
                    <button type="submit" onClick={() => form.handleSubmit}>{isLoading ? 'Finalizando pedido...' : 'Finalizar pagamento'}</button>
                    <button onClick={() => setContinuePayment(false)} type="button">Voltar para a edição de endereço</button>
                    </div>
                  </>
                )}
                </form>
          </>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
