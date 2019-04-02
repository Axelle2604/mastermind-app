import React, { memo } from 'react';
import { IN_GAME } from '../App.js';
import PropTypes from 'prop-types';
import {
  Title,
  StartScreenContainer,
  RulesContainer,
  StartButton,
  IndicatorContainer,
  ColorIndicator,
} from './styled-components/startScreenStyled';

const StartScreen = ({ changeGameState }) => {
  const startGame = () => {
    changeGameState(IN_GAME, false);
  };

  return (
    <StartScreenContainer>
      <Title>MASTERMIND</Title>
      <RulesContainer>
        <p>To win the game, you have to guess a combination of 5 colors.</p>
        <p>
          If after 12 tries you still have not found the combination, you lost.
        </p>
        <IndicatorContainer>
          <ColorIndicator color="#2ecc71" />
          <ColorIndicator color="#e67e22" />
        </IndicatorContainer>
        <p>
          A green indicator appears when you have found the right color in the
          right place.
        </p>
        <p>
          An orange indicator appears when you have found the right color but
          not in the right place.
        </p>
      </RulesContainer>
      <StartButton onClick={startGame}>START</StartButton>
    </StartScreenContainer>
  );
};

export default memo(StartScreen);

StartScreen.propTypes = {
  changeGameState: PropTypes.func,
};
