import { JSX } from 'react'
import { HeaderContainer, Hero, Logo } from './styles'
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type HeroProps = {
  children?: JSX.Element
  size?: 'big' | 'small'
}
export type Props = {
  mode: 'home' | 'products'
}

export type HeaderProps = HeroProps & Props

const Header = ({ children, size, mode }: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
  dispatch(open())
}
  return (
    <Hero size={size} style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <HeaderContainer mode={mode}>
        <Link to={"/"}>
          <span className="span_restaurantes">Restaurantes</span>
        </Link>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <span onClick={openCart} className="span_carrinho">{items.length} produto(s) no carrinho</span>
      </HeaderContainer>
      {children}
    </div>
  </Hero>
  )

}

export default Header


