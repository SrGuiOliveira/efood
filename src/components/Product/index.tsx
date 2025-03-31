import { ButtonProduct } from '../Button/styles'
import { Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ProductModel = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonProduct>Adicionar ao carrinho</ButtonProduct>
  </Card>
)

export default ProductModel
