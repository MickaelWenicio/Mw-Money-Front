import { Container, Content } from './styles';
import icon from '../../assets/icon.svg'
import plus from '../../assets/plus.svg'

interface HeaderProps {
  openNewTransaction : ()=> void;
}

const Header = ({openNewTransaction}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div>
          <img src={icon} alt="Ícone" />
          <h1>MW Money</h1>
        </div>
        <button onClick={openNewTransaction}><img src={plus}/> Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header