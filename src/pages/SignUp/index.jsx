import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Container, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import logo from '../../assets/logo.png';

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  return (
    <Container>

      <div>
      <img src={logo} alt="polígono azul" />
      <h1>food explorer</h1>
      </div>

      <Form>
        <h2>Crie sua conta</h2>

        <Input
        type="text" 
        label="name" 
        title="Seu nome" 
        placeholder="Exemplo: Maria da Silva"
        onChange={e => setName(e.target.value)}
        />

        <Input
         type="email" 
         label="email" 
         title="Email" 
         placeholder="exemplo@exemplo.com"
        onChange={e => setEmail(e.target.value)}
        />

        <Input
       type="password" 
       label="password" 
       title="Senha" 
       placeholder="No mínimo seis caracteres"
        onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to='/'>
        Já tenho uma conta
        </Link>

      </Form>

    </Container>
  )
}