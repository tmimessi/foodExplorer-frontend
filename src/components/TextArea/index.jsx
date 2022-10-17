// o textarea é igual ao input, mas o espaço é maior

import { Container, TextareaInput } from "./styles";

export function TextArea({label, title, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <TextareaInput id={label} {...rest}>
        {value}
      </TextareaInput>
    </Container>
  )
}