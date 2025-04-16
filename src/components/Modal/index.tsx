import { ModalBody, ModalContent } from './styles'
import close from '../../assets/close.png'
import { ButtonProduct } from '../Button/styles'
import { MenuItem } from '../../types/MenuItem'

// eslint-disable-next-line react-refresh/only-export-components
export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ foto, preco, nome, descricao, porcao, onClose, onAdd }: MenuItem) => {

  return (
    <>
      <ModalBody>
        <ModalContent className="container">
          <header>
            <img onClick={onClose} src={close} alt="Clique para fechar" />
          </header>
          <div className="iconDetails">
            <div>
              <img src={foto} alt="" />
            </div>
            <div>
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <span>Serve: {porcao}</span>
              <ButtonProduct onClick={onAdd}>
                Adicionar ao carrinho - {formatPrice(preco)}
              </ButtonProduct>
            </div>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </ModalBody>
    </>
  )
}

export default Modal
