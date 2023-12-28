import incomeImg from '../../assets/up.svg'
import expenseImg from '../../assets/down.svg'
import total from '../../assets/money.svg'
import { Container } from "./styles"
import { useContext } from 'react'
import { TransactionsContext } from '../../hooks/useTransactions'

const Summary = () => {
  const {transactions} = useContext(TransactionsContext)
  console.log(transactions)


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImg} alt="Saídas" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}

export default Summary