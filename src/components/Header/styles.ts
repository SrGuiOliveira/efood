import styled from 'styled-components'
import { HeroProps, Props } from '.'
import { colors } from '../../styles/styles'

export const Hero = styled.header<HeroProps>`
  width: 100%;
  height: ${(props) => (props.size === 'big' ? '360px' : '186px')};
  background-size: cover;
  font-weight: bold;
  text-align: center;
`
export const Logo = styled.img`
  width: 125px;
  margin: 0 194px;
`
export const HeaderContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  span {
    display: ${(props) => (props.mode === 'home' ? 'none' : 'block')};
    color: ${colors.salmon};
    font-size: 18px;
    font-weight: bold;
    width: 256px;
  }

  .span_restaurantes {
    text-align: left;
  }

  .span_carrinho {
    text-align: right;
  }
`
