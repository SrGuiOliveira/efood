import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Modal from '../../components/Modal'
import { Restaurant } from '../../types/Restaurants'
import { MenuItem } from '../../types/MenuItem'

const RestaurantProducts = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
        setMenu(data.cardapio)
      })
      .catch((err) => console.error('Erro ao buscar restaurante:', err))
  }, [id])

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
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
        />
      )}
    </div>
  )
}

export default RestaurantProducts
