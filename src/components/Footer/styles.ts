import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { Logo } from '../Header/styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.softBeige};
  height: 298px;
  margin: 0 auto;
  margin-top: 120px;
  text-align: center;

  @media (max-width: 768px) {
    height: 240px;
  }

  p {
    font-size: 10px;
    width: 480px;
    color: ${colors.salmon};
    margin: 0 auto;
    margin-top: 80px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 40px;
    }
  }

  ${Logo} {
    padding-top: 40px;
    margin: 0 auto;
  }
`

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 32px;

  img {
    margin-left: 8px;
  }
`
