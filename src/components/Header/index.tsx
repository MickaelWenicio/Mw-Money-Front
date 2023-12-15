import logo from '../../assets/Symbol.svg'
import { Container, Content, Button } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="MW Money" />
          <h1 style={{color:'#ffffff', fontSize:'1.3rem'}}>mw money</h1>
        </div>
        <Button>Nova transação</Button>
      </Content>
    </Container>
  )
}

export default Header