import { Container } from "./styles"
import { useTransactions } from "../../hooks/useTransactions";
import trash from "../../assets/trash.svg";


const TransactionsTable = () => {

  const { transactions, deleteTransaction } = useTransactions()

  const renderTransactions = () =>{
    return (
        <tbody>
          {transactions.map((transaction)=>(
              <tr key={transaction.id}>
                <td className="title">{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency:'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <img src={trash} alt="deletar" onClick={()=> deleteTransaction(transaction.id)} />
                </td>
              </tr>
          ))}
        </tbody>
    )
  }


  return (
    <Container>
      <h2>Transações</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
          {
            transactions.length ? renderTransactions() : <tbody><td colSpan={5} style={{textAlign: 'center'}}> Sem Transações </td></tbody>
          }
      </table>
    </Container>
  )
}

export default TransactionsTable