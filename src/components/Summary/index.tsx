import incomeImg from '../../assets/up.svg'
import expenseImg from '../../assets/down.svg'
import total from '../../assets/money.svg'
import { Container } from "./styles"
import { useTransactions } from '../../hooks/useTransactions'

const Summary = () => {
  const {transactions} = useTransactions()

  console.log(transactions)

  const summary = transactions.reduce((acc, transaction)=>{
    if(transaction.type === 'income'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.expenses += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  },{
    deposits: 0,
    expenses: 0,
    total: 0 
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImg} alt="Saídas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
          }).format(summary.expenses)}
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
          }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}

export default Summary