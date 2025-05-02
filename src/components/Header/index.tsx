import { Container, Content } from './styles'

interface HeaderProps {
  openNewTransaction : ()=> void;
}

const Header = ({openNewTransaction}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--green)' }} >
            <path d="M12 22L3 17V7L12 2L21 7V17L12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14L17 11V7L12 4L7 7V11L12 14Z" fill="currentColor" />
          </svg>
          <h1 style={{color:'#ffffff', fontSize:'1.3rem'}}>MW Money</h1>
        </div>
        <button onClick={openNewTransaction}>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header