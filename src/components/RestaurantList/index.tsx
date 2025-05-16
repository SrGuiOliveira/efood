import RestaurantModel from '../Restaurant'
import { List } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../Loader'

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

if (isLoading) {
  return <Loader />;
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
