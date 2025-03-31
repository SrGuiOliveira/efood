import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const BannerContainer = styled.div`
  background-size: cover;
  height: 280px;
  position: relative;
  h1 {
    font-weight: 100;
    color: ${colors.white};
    padding-top: 25px;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    color: ${colors.white};
    position: absolute;
    bottom: 32px;
  }
`
