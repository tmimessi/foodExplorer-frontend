import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderItem } from '../../components/OrderItem';
import { Button } from '../../components/Button';
// import { Input } from '../../components/Input';
import { Container, Content, Payment} from './styles';
// import { FaRegCheckCircle } from 'react-icons/fa'
// import { RiRestaurantLine } from 'react-icons/ri'
import imagePix from '../../assets/pix.svg';
import imageCreditCard from '../../assets/card.svg';
import imageQrCode from '../../assets/qrcode.png';

export function Cart(){
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h3>Meu pedido</h3>
          <div className='order-section'>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
          <div className="total">
            <p>Total: R$<span>103,88</span></p>
          </div>
        </div>

        <Payment>
          <h3>Pagamento</h3>
          <div>
            <div>
              <button
                className='pix-button'
                type='button'
              >
                <img src={imagePix} alt="ícone do pix" />
                Pix
              </button>

              <button
                className='credit-button'
                type='button'
              >
                <img src={imageCreditCard} alt="ícone de um cartão de crédito" />
                Crédito
              </button>
            </div>

            <div className='payment-option'>
              <img src={imageQrCode} alt="qr code" />
  
              <Button
                title="Finalizar pagamento"
              />
            </div>
          </div>
        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}
