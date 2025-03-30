import { Hero, Logo, Title } from './styles'
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'

const Header = () => (
  <Hero style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Logo src={logo} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Hero>
)

export default Header
