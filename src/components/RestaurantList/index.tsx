import Restaurant from '../../models/Restaurant'
import RestaurantModel from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantModel
          key={restaurant.id}
          category={restaurant.category}
          description={restaurant.description}
          image={restaurant.image}
          score={restaurant.score}
          title={restaurant.title}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
