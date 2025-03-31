import Product from '../../models/Product'
import ProductModel from '../Product'
import { List } from './styles'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductModel
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </List>
  </div>
)

export default ProductList
