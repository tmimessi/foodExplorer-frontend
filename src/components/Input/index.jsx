import { Container } from './styles'

export function Input({title, label, ...rest}){
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <input id={label} {...rest} />
    </Container>
  )
}