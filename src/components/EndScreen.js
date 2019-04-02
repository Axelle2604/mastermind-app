import React, { memo } from 'react';
import {
  EndGameContainer,
  TextContainer,
  RestartButton,
} from './styled-components/endScreenStyled';
import { IN_GAME } from '../App.js';
import PropTypes from 'prop-types';

const EndScreen = ({ changeGameState, isWon }) => {
  const restartGame = () => {
    changeGameState(IN_GAME, false);
  };

  const endGame = isWon ? (
    <TextContainer>Tu as gagné !</TextContainer>
  ) : (
    <TextContainer>Tu as perdu !</TextContainer>
  );

  return (
    <EndGameContainer>
      {endGame}
      <RestartButton onClick={restartGame}>Rejouer ?</RestartButton>
    </EndGameContainer>
  );
};

export default memo(EndScreen);

EndScreen.propTypes = {
  changeGameState: PropTypes.func,
  isWon: PropTypes.bool,
};
