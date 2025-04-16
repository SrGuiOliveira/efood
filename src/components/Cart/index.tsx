import { useDispatch, useSelector } from "react-redux"
import { CartContainer, CartItem, Garbage, Overlay, Sidebar, TotalContainer, Warning } from "./styles"
import { close, remove } from "../../store/reducers/cart"
import { RootReducer } from "../../store"
import { formatPrice } from "../Modal"

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

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

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? (
          <Warning>
            <svg onClick={closeCart} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/>
            </svg>
            <p>Carrinho vazio</p>
          </Warning>
        ) : (
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
            <button>Continuar com a entrega</button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
