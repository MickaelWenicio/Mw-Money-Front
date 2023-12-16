import Modal from 'react-modal'

interface TransactionModalProps {
    ModalIsOpen: boolean,
    onRequestCloseModal: ()=> void;
}

Modal.setAppElement('#root')

const TransactionModal = ({ModalIsOpen, onRequestCloseModal}:TransactionModalProps) => {
  return (
    <Modal isOpen={ModalIsOpen} onRequestClose={onRequestCloseModal}>
          <h2>Cadastrar Transação</h2>
    </Modal>
  )
}

export default TransactionModal