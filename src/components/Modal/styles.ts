import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { ButtonProduct } from '../Button/styles'

export const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  height: 344px;
  background-color: ${colors.salmon};
  color: ${colors.white};

  header {
    display: flex;
    justify-content: end;

    img {
      margin: 8px;
      cursor: pointer;

      &:hover {
        filter: brightness(150%);
        width: 17px;
      }
    }
  }

  .iconDetails {
    display: flex;

    h3 {
      font-size: 18px;
      font-weight: 900;
    }
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin: 0 32px;
    }

    p {
      width: 656px;
      line-height: 22px;
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;
    }

    span {
      display: block;
      margin-top: 32px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 400;
    }

    ${ButtonProduct} {
      background-color: ${colors.white};
      color: ${colors.salmon};
    }
  }
`
