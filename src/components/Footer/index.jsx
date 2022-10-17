import { Container, Content } from './styles';
import logo2 from '../../assets/logo2.png';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo2} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}