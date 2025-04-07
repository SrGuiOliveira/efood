import { BannerContainer } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <div className="titles">
        <p>{tipo}</p>
        <h2>{titulo}</h2>
      </div>
    </div>
  </BannerContainer>
)

export default Banner
