import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const BannerContainer = styled.div`
  background-size: cover;
  height: 280px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    color: ${colors.white};
    position: absolute;
    bottom: 32px;
  }

  p {
    font-weight: 100;
    position: absolute;
    color: ${colors.white};
    padding-top: 25px;
    font-size: 32px;
  }

  .titles p,
  h2 {
    z-index: 1;
  }
`
