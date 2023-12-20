import Modal from 'react-modal'
import {Content, TransactionTypeContainer, RadioBox} from './style'
import closeImg from '../../assets/close.svg'
import inComeImg from '../../assets/up.svg'
import outComeImg from '../../assets/down.svg'
import { useState } from 'react'

interface TransactionModalProps {
    ModalIsOpen: boolean,
    onRequestCloseModal: ()=> void;
}
Modal.setAppElement('#root')

const TransactionModal = ({ModalIsOpen, onRequestCloseModal}:TransactionModalProps) => {

    const [type, setType] = useState('')
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
                    
                    {/* nesse caso o botão é alterado altomaticamente, pois o que determina o estilo dele é a variavel "type", então se o primeiro botão for clicado o isActive do mesmo botão é dado com true, pois a variável type será setada como income, então o estilo dele é alterado, porém, se o segundo botão for clicado, o type é alterado para outcome, fazendo o isActive do primeiro botão receber false, e fazendo-o voltar ao estilo padrão enquanto o segundo botão recebe o estilo.*/}
                    <TransactionTypeContainer>
                        <RadioBox 
                          type='button'
                          onClick={()=>{setType('income')}}
                          isActive = {type === 'income'} //boolean
                          activeColor='green'
                        >
                            <img src={inComeImg}/>
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                          type='button'
                          onClick={()=>{setType('outcome')}}
                          isActive= {type === 'outcome'}
                          activeColor='red'
                        >
                            <img src={outComeImg}/>
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder='Categoria'/>
                    <button type='submit'>Cadastrar</button>
                </form>
            </Content>
        </Modal>
  )
}

export default TransactionModal