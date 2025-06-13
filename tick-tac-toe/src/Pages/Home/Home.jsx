import React from 'react'
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../../Styles/General.styled";


function Home() {
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, Highest Score Wins!</Subtitle>
    </Container>
  )
}

export default Home