import { Container, Content, Table, Thead, Tbody, SelectWrapper } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Orders(){
  return (
    <Container>
      <Header />

      <Content>
        <h3>Pedidos</h3>
          <main>
            <Table>
              <Thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </Thead>

              <Tbody>
                <tr>
                  <td>Pendente</td>
                  <td>00000001</td>
                  <td>1x Salada Raddish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>Pendente</td>
                  <td>00000001</td>
                  <td>1x Salada Raddish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>Pendente</td>
                  <td>00000001</td>
                  <td>1x Salada Raddish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>
                <tr>
                  <td>Pendente</td>
                  <td>00000001</td>
                  <td>1x Salada Raddish, 1x Torradas de Parma, 1x Chá de Canela, 1x Suco de Maracujá</td>
                  <td>20/05 às 18h00</td>
                </tr>
              </Tbody>
            </Table>
          </main>
        </Content>
      <Footer />
    </Container>
  )
}