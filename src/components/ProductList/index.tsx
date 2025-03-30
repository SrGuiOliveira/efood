import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
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

export default ProductList
