import React, { useContext } from 'react'
import { Container } from '../../Styles/General.styled';
import { GameBoardStyle } from './Game.styled';
import GameCell from '../../Components/GameCell/GameCell';
import GameContext from '../../Context/GameContext';

function Game() {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  );
}

export default Game;