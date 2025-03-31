import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { ButtonProduct } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  padding: 8px;

  ${ButtonProduct} {
    background-color: ${colors.softBeige};
    color: ${colors.salmon};
    width: 100%;
    margin-top: 8px;
    padding: 8px;
  }
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
`
