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
import { RestaurantModelProps } from '../../types/RestaurantModelProps'

const RestaurantModel = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  id
}: RestaurantModelProps) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Category>
        {destacado && <Tag>destaque</Tag>}
        <Tag>{tipo}</Tag>
      </Category>
      <TitleLine>
        <Title>{titulo}</Title>
        <ScoreContainer>
          <p>{avaliacao}</p>
          <img src={star} alt="Star rating" />
        </ScoreContainer>
      </TitleLine>
      <Description>{descricao}</Description>
      <ButtonProduct to={`/restaurant/${id}`}>Saiba mais</ButtonProduct>
    </Card>
  )
}

export default RestaurantModel
