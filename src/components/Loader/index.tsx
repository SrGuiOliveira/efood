import { BounceLoader } from 'react-spinners'
import { colors } from "../../styles/styles";
import { Container } from "./styles";

const Loader = () => {
  return (
  <Container>
    <BounceLoader color={colors.salmon}/>
  </Container>
  )
}

export default Loader
