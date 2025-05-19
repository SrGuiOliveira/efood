import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { ButtonProduct } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  padding: 8px;
  position: relative;
  height: 100%;

  img {
    object-fit: cover;
    text-align: center;
    width: 100%;
  }
`
export const ButtonMenu = styled(ButtonProduct)`
  background-color: ${colors.softBeige};
  color: ${colors.salmon};
  position: absolute;
  text-align: center;
  bottom: 8px;
  left: 8px;
  right: 8px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding: 8px 0;
  color: ${colors.softBeige};
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.softBeige};
  margin-bottom: 32px;
`
