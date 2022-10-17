import { Container } from './styles';

export function Button({title, image, ...rest}) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}