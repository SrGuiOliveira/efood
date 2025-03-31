import { BannerContainer } from './styles'
import laDolceVita_banner from '../../assets/laDolceVita_banner.png'
const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${laDolceVita_banner})` }}>
    <div className="container">
      <h1>italiana</h1>
      <h2>La Dolce Vita Trattoria</h2>
    </div>
  </BannerContainer>
)

export default Banner
