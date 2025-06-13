import React from 'react'
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../../Styles/General.styled";
import Header from '../../Components/Header/Header';


function Home() {
  return (
    <Container>
      <Header />
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, Highest Score Wins!</Subtitle>
    </Container>
  )
}

export default Home