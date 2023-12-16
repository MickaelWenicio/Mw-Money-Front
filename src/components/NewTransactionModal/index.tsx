import Modal from 'react-modal'
import {Content} from './style'
import closeImg from '../../assets/close.svg'

interface TransactionModalProps {
    ModalIsOpen: boolean,
    onRequestCloseModal: ()=> void;
}

Modal.setAppElement('#root')

const TransactionModal = ({ModalIsOpen, onRequestCloseModal}:TransactionModalProps) => {
  return (
        <Modal 
            isOpen={ModalIsOpen} 
            onRequestClose={onRequestCloseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Content>
                <button type='button' 
                    onClick={onRequestCloseModal}
                    className='react-modal-close'
                >
                    <img src={closeImg} alt="Fechar" />
                </button>
                <h2>Cadastrar Transação</h2>
                <form action="">
                    <input type="text" placeholder='Nome'/>
                    <input type="number" placeholder='Valor'/>
                    <input type="text" placeholder='Categoria'/>
                    <button type='submit'>Cadastrar</button>
                </form>
            </Content>
        </Modal>
  )
}

export default TransactionModal