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

  @media (max-width: 1023px) {
    margin: 0 10px;
    padding: 0 10px;
    height: 550px;
  }

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

    @media (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
    }

    h3 {
      font-size: 18px;
      font-weight: 900;

      @media (max-width: 1023px) {
        margin-top: 4px;
        text-align: center;
      }
    }
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin: 0 32px;

      @media (max-width: 1023px) {
        width: 100%;
        margin: 0;
      }
    }

    p {
      line-height: 22px;
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;

      @media (min-width: 1023px) {
        width: 656px;
      }

      @media (max-width: 1023px) {
        line-height: 18px;
        margin-top: 8px;
      }
    }

    span {
      display: block;
      margin-top: 32px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 400;

      @media (max-width: 1023px) {
        line-height: 14px;
        margin-top: 8px;
        font-weight: bold;
      }
    }

    ${ButtonProduct} {
      background-color: ${colors.white};
      color: ${colors.salmon};
    }
  }
`
