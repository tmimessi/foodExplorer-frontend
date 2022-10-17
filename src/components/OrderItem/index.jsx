import { Container, Content } from './styles'
import ravanello from '../../assets/salada-ravanello.png'

export function OrderItem(){
  return (
    <Container>
      <div>
        <img src={ravanello} alt="imagem do prato" />
      </div>
      <Content>
        <div>
          <span>1X</span>
          <span>Salada Ravanello</span>
          <strong>R$25,97</strong>
        </div>
        <button type='button'> Excluir </button>
      </Content>
    </Container>
  )
}