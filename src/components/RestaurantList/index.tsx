import { useEffect, useState } from 'react'
import RestaurantModel from '../Restaurant'
import { List } from './styles'
import { Restaurant } from '../../types/Restaurants'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <List>
        {restaurants?.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantModel
              id={restaurant.id}
              titulo={restaurant.titulo}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
