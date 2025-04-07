import { ButtonProduct } from './styles'

type Props = {
  to?: string
  children: React.ReactNode
}

const Button = ({ to, children }: Props) =>
  to ? (
    <ButtonProduct to={to}>{children}</ButtonProduct>
  ) : (
    <button>{children}</button>
  )

export default Button
