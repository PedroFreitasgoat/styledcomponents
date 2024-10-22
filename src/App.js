import styled from 'styled-components' /* links de importação */
import { createGlobalStyle } from "styled-components"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`;

const Container = styled.div` /*Sempre colocar STYLED depois do = */
  background-color: white;
  height: 100vh;
`

function App() {
  return (
    <>
    <GlobalStyles />
    <Container>
      <Navbar />
      <Hero />
    </Container>
    </>
  );
}

export default App;
