import { ButtonMenu, Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onDetailsClick: () => void
}

const ProductModel = ({ image, title, description, onDetailsClick }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonMenu onClick={onDetailsClick}>Mais detalhes</ButtonMenu>
  </Card>
)

export default ProductModel
