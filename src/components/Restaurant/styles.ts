import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { ButtonProduct } from '../Button/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: 1px solid ${colors.salmon};

  ${ButtonProduct} {
    margin: 8px;
    color: ${colors.softBeige};
  }
`
export const Title = styled.h3``

export const Description = styled.p`
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
  margin-bottom: 8px;
`

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    line-height: 100%;
    color: ${colors.salmon};
    margin-right: 8px;
  }
`
export const TitleLine = styled.div`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const Category = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
