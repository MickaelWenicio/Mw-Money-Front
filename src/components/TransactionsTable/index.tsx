import { useEffect } from "react"
import { Container } from "./styles"

const Transactions = () => {

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://localhost:5173/api/transactions')
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  },[])

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
          <tr>
            <td className="title">Desenvolvimento web</td>
            <td className="income">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/02/2023</td>
          </tr>
          <tr>
            <td className="title">Conta de luz</td>
            <td className="outcome">- R$1.000</td>
            <td>Contas a pagar</td>
            <td>03/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default Transactions