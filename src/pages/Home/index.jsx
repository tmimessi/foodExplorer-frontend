import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container, Slogan, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"

import cover from '../../assets/cover.png';

function isMainCategory(dish){
  return dish.category === "pratos principais"
}

function isDesertCategory(dish){
  return dish.category === "sobremesas"
}

function isBeverageCategory(dish){
  return dish.category === "bebidas"
}

export function Home() {
  const [mainDishes, setMainDishes] = useState([])
  const [desertDishes, setDesertDishes] = useState([])
  const [beverages, setBeverages] = useState([])

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get('/dishes')
      setMainDishes(data.filter(isMainCategory))
    }

    fetchDishes();
  })

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get('/dishes')
      setDesertDishes(data.filter(isDesertCategory))
    }

    fetchDishes();
  })

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get('/dishes')
      setBeverages(data.filter(isBeverageCategory))
    }

    fetchDishes();
  })

  return (
    <Container>
      <Header />
      <Content>

      <Slogan>
        <img src={cover} alt="cover photo" className="cover"/>
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
      </Slogan>

      <Section title="Pratos principais">
          {mainDishes.map(dish => <Card dish={dish} key={dish.id} />)}
      </Section>

      <Section title="Sobremesas">
      {desertDishes.map(dish => <Card dish={dish} key={dish.id} />)}
      </Section>

      <Section title="Bebidas">
      {beverages.map(dish => <Card dish={dish} key={dish.id} />)}
      </Section>
    
        </Content>
      <Footer />
    </Container>
  )
}