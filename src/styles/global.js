import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    font-size: 62.5%;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
}   
    
body, input, button, textarea {
  outline: none;
}
    
a {
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
    
button, a {
  cursor: pointer;
  transition: filter 0.2s;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

button:hover, a:hover {
  filter: brightness(0.5);
}
`

// align-items will align child elements along the column axis, and justify-items will align child elements along the row axis.