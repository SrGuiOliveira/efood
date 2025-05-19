import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { colors } from '../../styles/styles'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${colors.salmon};
  font-size: 36px;
  margin: 0 auto;
  margin-top: 138px;
  text-align: center;
  width: 536px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 32px;
    font-size: 24px;
  }
`

const Home = () => (
  <>
    <Header mode="home" size="big">
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Header>
    <RestaurantList />
  </>
)

export default Home
