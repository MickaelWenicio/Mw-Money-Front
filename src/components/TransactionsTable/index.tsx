import { useContext, useEffect, useState } from "react"
import { Container } from "./styles"
import { TransactionsContext } from "../../hooks/useTransactions";

const TransactionsTable = () => {

  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  if (!transactions) {
    return <p>Carregando transações...</p>; // ou qualquer lógica adequada para o estado de carregamento
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

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
                  )}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable