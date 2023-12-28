import Modal from 'react-modal'
import {Content, TransactionTypeContainer, RadioBox} from './style'
import closeImg from '../../assets/close.svg'
import inComeImg from '../../assets/up.svg'
import outComeImg from '../../assets/down.svg'
import { FormEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../hooks/useTransactions'

interface TransactionModalProps {
    ModalIsOpen: boolean,
    onRequestCloseModal: ()=> void;
}
Modal.setAppElement('#root')



const TransactionModal = ({ModalIsOpen, onRequestCloseModal}:TransactionModalProps) => {
    const {createTransaction} = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')


    async function handleCreateNewTransaction (e: FormEvent) {
        e.preventDefault()
        await createTransaction({
            title,
            amount: value,
            category,
            type,
        })
        setCategory('')
        setTitle('')
        setType('')
        setValue(0)
        onRequestCloseModal() 
    }


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
                <form onSubmit={handleCreateNewTransaction}>
                    <input type="text" placeholder='Título' onChange={e => setTitle(e.target.value)}/>

                    <input type="number" placeholder='Valor' onChange={e => setValue(Number(e.target.value))}/>
                    
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
                          onClick={()=>{setType('expense')}}
                          isActive= {type === 'expense'}
                          activeColor='red'
                        >
                            <img src={outComeImg}/>
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder='Categoria' onChange={e => setCategory(e.target.value)}/>
                    <button type='submit'>Cadastrar</button>
                </form>
            </Content>
        </Modal>
  )
}

export default TransactionModal