import { Container, Form } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png';
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {signIn} = useAuth()
  function handleSignIn(){
    signIn({email, password})
  }
  return (
    <Container>

        <div>
        <img src={logo} alt="polígono azul" />
        <h1>food explorer</h1>
        </div>

        <Form>
        <h2>Faça login</h2>

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
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
        Criar conta
        </Link>

      </Form>
    </Container>
  )
}