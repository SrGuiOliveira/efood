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
import { useNavigate } from 'react-router-dom'

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
}: Props) => {
  const navigate = useNavigate() // Hook para navegação

  const formatTitleForURL = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  const handleRedirect = () => {
    const formattedTitle = formatTitleForURL(title)
    navigate(`/${formattedTitle}`)
  }

  return (
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
      <ButtonProduct onClick={handleRedirect}>Saiba mais</ButtonProduct>
    </Card>
  )
}

export default RestaurantModel
