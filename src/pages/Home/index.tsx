import Restaurant from '../../models/Restaurant'
import RestaurantList from '../../components/RestaurantList'
import hiokiSushi from '../../assets/hioki_sushi.png'
import laDolceVita from '../../assets/laDolceVita.png'
import Header from '../../components/Header'
import { colors } from '../../styles/styles'
import styled from 'styled-components'

const restaurants: Restaurant[] = [
  {
    id: 1,
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    score: 4.9,
    image: hiokiSushi
  },
  {
    id: 2,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolceVita
  },
  {
    id: 3,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolceVita
  },
  {
    id: 4,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolceVita
  },
  {
    id: 5,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolceVita
  },
  {
    id: 6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: laDolceVita
  }
]

const Title = styled.h1`
  color: ${colors.salmon};
  font-size: 36px;
  margin: 0 auto;
  margin-top: 138px;
  text-align: center;
  width: 536px;
`

const Home = () => (
  <>
    <Header mode="home" size="big">
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Header>
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
