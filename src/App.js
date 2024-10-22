import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from 'styled-components'/* é um componente que permite o compartilhamento e defina um conjunto de estilos */

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }

  }
`

const Container = styled.div` /*Sempre colocar STYLED depois do = */
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: row; /*Alinha os itens em LINHA */
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary}
`;
const theme = {
  colors: {
    primary: 'darkBlue',
    secondary: 'tomato',
  },
};

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container >
      <Title>Pedro gostosao</Title>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
