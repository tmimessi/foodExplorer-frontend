import { useAuth } from '../../hooks/auth'
import { Container, Content, Logo, Logout, Button, Search } from "./styles"
import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TbReceipt } from 'react-icons/tb'
import logo from '../../assets/logo.png'

export function Header({search}){
  const { signOut } = useAuth()
  
  return(
    <Container>
      <Content>
      <Logo to='/'>
        <img src={logo} alt="polígono azul" />
        <strong>food explorer</strong>
      </Logo>

      <Search>
          {<FiSearch size={20}/>}
          <input 
            type="text"
            placeholder="Busque pelas opções de pratos"  
            onChange={e => search(e.target.value)}
          />
      </Search>

      <Button to='/orders' type='button'>
      <TbReceipt size={25}/>
      Meu pedido
      </Button>

      <Logout to="/" onClick={signOut}>
        <FiLogOut/>
      </Logout>
      </Content>
    </Container>
  )
}