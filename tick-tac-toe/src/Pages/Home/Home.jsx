import React from 'react'
import { Container } from "./Home.styled";
import { Title } from "../../Styles/General.styled";
import Header from '../../Components/Header/Header';

function Home() {
  return (
    <Container>
      <Title>
        <Header />
        Tic Tac Toe
      </Title>
    </Container>
  )
}

export default Home