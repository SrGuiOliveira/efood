import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Modal from '../../components/Modal'
import { useGetRestaurantQuery } from '../../services/api'
import { MenuItem } from '../../types/MenuItem'
import Cart from '../../components/Cart'
import { add, open } from '../../store/reducers/cart'



const RestaurantProducts = () => {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const { data: restaurant } = useGetRestaurantQuery(id!)
  const menu = restaurant?.cardapio

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(selectedProduct!))
    dispatch(open())
    closeModal()
  }

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <Header mode="products" />
      {restaurant && (
        <Banner
          titulo={restaurant.titulo}
          capa={restaurant.capa}
          tipo={restaurant.tipo}
        />
      )}
      <ProductList products={menu} onProductClick={handleProductClick} />
      {selectedProduct && (
        <Modal
          foto={selectedProduct.foto}
          id={selectedProduct.id}
          porcao={selectedProduct.porcao}
          nome={selectedProduct.nome}
          preco={selectedProduct.preco}
          descricao={selectedProduct.descricao}
          onClose={closeModal}
          onAdd={addToCart}
        />
      )}
      <Cart />
    </div>
  )
}

export default RestaurantProducts
