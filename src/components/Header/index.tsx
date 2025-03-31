import { JSX } from 'react'
import { HeaderContainer, Hero, Logo } from './styles'
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export type HeroProps = {
  children?: JSX.Element
  size?: 'big' | 'small'
}
export type Props = {
  mode: 'home' | 'products'
}

export type HeaderProps = HeroProps & Props

const Header = ({ children, size, mode }: HeaderProps) => (
  <Hero size={size} style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <HeaderContainer mode={mode}>
        <span className="span_restaurantes">Restaurantes</span>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <span className="span_carrinho">0 produto(s) no carrinho</span>
      </HeaderContainer>
      {children}
    </div>
  </Hero>
)

export default Header
