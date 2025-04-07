import ProductModel from '../Product'
import { List } from './styles'
import { MenuItem } from '../../types/MenuItem'

type Props = {
  products: MenuItem[]
  onProductClick: (product: MenuItem) => void
}

const ProductList = ({ products, onProductClick }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductModel
          key={product.id}
          image={product.foto}
          title={product.nome}
          description={product.descricao}
          onDetailsClick={() => onProductClick(product)}
        />
      ))}
    </List>
  </div>
)

export default ProductList
