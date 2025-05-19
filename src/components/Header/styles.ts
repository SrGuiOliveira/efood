import styled from 'styled-components'
import { HeroProps, Props } from '.'
import { colors } from '../../styles/styles'

export const Hero = styled.header<HeroProps>`
  width: 100%;
  height: ${(props) => (props.size === 'big' ? '360px' : '186px')};
  background-size: cover;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    height: ${(props) => (props.size === 'big' ? '240px' : '120px')};
  }
`
export const Logo = styled.img`
  width: 125px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 96px;
  }
`
export const HeaderContainer = styled.div<Props>`
  display: flex;
  justify-content: ${(props) =>
    props.mode === 'home' ? 'center' : 'space-between'};
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  span {
    display: ${(props) => (props.mode === 'home' ? 'none' : 'block')};
    color: ${colors.salmon};
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .span_restaurantes {
    cursor: pointer;

    &:hover {
      filter: brightness(50%);
    }
  }

  .span_carrinho {
    cursor: pointer;

    &:hover {
      filter: brightness(50%);
    }

    @media (max-width: 768px) {
      text-wrap: balance;
      max-width: 100px;
    }
  }
`
