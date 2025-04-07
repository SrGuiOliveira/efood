import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const ButtonProduct = styled(Link)<{ to?: string }>`
  background-color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
`
