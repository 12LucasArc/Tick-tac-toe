import React from 'react'
import { Container, Title, Subtitle } from "../../Styles/General.styled";
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, Highest Score Wins!</Subtitle>
      <Button onClick= {() => navigate("/Game")}>Play Now</Button>
    </Container>
  )
}

export default Home