import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Ingredient } from "../../components/Ingredient"
import { Container, Content, ButtonBack, Main, Ingredients, Info } from './styles'
import { FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Details(){
  const [data, setData] = useState(null);
  console.log(data)
  const params = useParams();
  
  const imageURL = data && `${api.defaults.baseURL}/files/${data.img}`;

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data);
    }

    fetchDish();
  }, [])
  
  return (
    <Container>

      <Header />

      <Content>

      <ButtonBack>
        <Link to="/"><FiChevronLeft size={30}/>Voltar</Link>
      </ButtonBack>

      {
        data &&
      <Main>
        <div> 
          <img src={imageURL} />
        </div>

        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <Ingredients>
          {
            data.ingredient.map(ingredient => (
              <Ingredient key={String(ingredient.id)} ingredient={ingredient.name} />
            ))
          }
          </Ingredients>

            <Info>
                <strong>R${data.price}</strong>

                <button
                  className="btn"><FiMinus size={25}/>
                </button>
            
                <span>01</span>
            
                <button
                  className="btn"><FiPlus size={25}/>
                </button>

                <div>
                  <Button 
                    title="incluir"
                  />
                </div>
              </Info>
            </div>


      </Main>
}
      </Content>

      <Footer />

    </Container>
  )
}