import React from 'react' /* links de importação */
import styled from 'styled-components'
import heroImage from '../../img/hero.png'

const Container = styled.div`  /* container principal o */
    display: flex;
    height: 90%;
`

const Left = styled.div`
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Right = styled.div`
    width: 40%;
    background-color: white;
    display: flex;
    align-items: center;
`

const Image = styled.img`
  width: 500px;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient( to right, aliceblue 50%, darkblue 50% );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`

const Title = styled.div `
    width: 60%;
    font-size: 40px;
    font-weight: bold;
    color: darkblue;
    text-align: center;
`

const Description = styled.p`
    width: 70%;
    font-size: 20px;
    color: gray;
`

const Hero = () => {
  return (
    <Container>
      <Left><Title>IT-Management - IT <br /> Support and IT-Services <br /> for everyone!</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus recusandae excepturi sed veritatis quis alias. Quasi error, magni hic quisquam nulla consectetur provident ipsam commodi vero?</Description>
      <ButtonsContainer>
        <Button>About us</Button>
        <Button>Contact us</Button>
      </ButtonsContainer>
      </Left>
      <Right><Image src={heroImage}/></Right>
    </Container>
  )
}

export default Hero
