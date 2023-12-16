import logo from '../../assets/Symbol.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  openNewTransaction : ()=> void;
}

const Header = ({openNewTransaction}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="MW Money" />
          <h1 style={{color:'#ffffff', fontSize:'1.3rem'}}>mw money</h1>
        </div>
        <button onClick={openNewTransaction}>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header