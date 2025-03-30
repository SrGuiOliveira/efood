import { FooterContainer, SocialList } from './styles'
import { Logo } from '../Header/styles'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} />
      <SocialList>
        <img src={instagram} />
        <img src={facebook} />
        <img src={twitter} />
      </SocialList>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
