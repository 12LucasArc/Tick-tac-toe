import React from 'react'
import { Container } from '../../Styles/General.styled';
import { GameBoardStyle } from './Game.styled';
import GameCell from '../../Components/GameCell/GameCell';

function Game() {
  const Board = [1,2,3,4,5,6,7,8,9]
  return (
    <Container>
      <GameBoardStyle>
        {
          Board.map((item, index) => (
            <GameCell key={index} />
          ))
        }
      </GameBoardStyle>
    </Container>
  );
}

export default Game;