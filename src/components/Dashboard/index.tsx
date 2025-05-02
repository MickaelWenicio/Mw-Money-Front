import Summary from '../Summary/index.tsx'
import {Container} from './styles.ts'
import Transactions from '../TransactionsTable/index.tsx'

const Dashboard = () => {
  return (
    <Container>
        <Summary/>
        <Transactions/>
    </Container>
  )
}

export default Dashboard