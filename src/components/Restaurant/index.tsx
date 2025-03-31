import {
  Card,
  Category,
  Description,
  ScoreContainer,
  Title,
  TitleLine
} from './styles'
import Tag from '../Tag'
import star from '../../assets/star.png'
import { ButtonProduct } from '../Button/styles'

type Props = {
  category: string[]
  description: string
  image: string
  title: string
  score: number
}

const RestaurantModel = ({
  category,
  description,
  image,
  title,
  score
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Category>
      {category.map((category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </Category>
    <TitleLine>
      <Title>{title}</Title>
      <ScoreContainer>
        <p>{score}</p>
        <img src={star} alt="Star rating" />
      </ScoreContainer>
    </TitleLine>
    <Description>{description}</Description>
    <ButtonProduct>Saiba mais</ButtonProduct>
  </Card>
)

export default RestaurantModel
