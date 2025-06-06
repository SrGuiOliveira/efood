import { createGlobalStyle } from 'styled-components'

export const colors = {
  Beige: '#FFF8F2',
  salmon: '#E66767',
  white: '#FFF',
  softBeige: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}
  body {
    background-color: ${colors.Beige};
  }

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 90%;
    }
  }
`
