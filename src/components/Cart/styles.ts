import styled from 'styled-components'
import { colors } from '../../styles/styles'
import garbage from '../../assets/garbage.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  transform: translateX(100%);
  transition: transform 1s ease-in-out;

  &.is-open {
    transform: translateX(0);
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  > button {
    width: 100%;
    background-color: ${colors.softBeige};
    color: ${colors.salmon};
    padding: 4px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`
export const Warning = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: ${colors.softBeige};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 8px;
  }

  svg {
    cursor: pointer;

    &:hover {
      margin-right: 2px;
    }
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.softBeige};
  color: ${colors.salmon};
  padding: 8px 8px 12px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    display: block;
  }
`
export const Garbage = styled.button`
  background-image: url(${garbage});
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 8px;
  bottom: 8px;
`
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: ${colors.softBeige};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`
