import React, { PureComponent } from 'react';
import MastermindRow from './MastermindRow';
import { colors } from './utils/data';
import { END_GAME, START_GAME } from '../App.js';
import PropTypes from 'prop-types';
import MastermindSolution from './MastermindSolution';
import UserBoxColor from './UserBoxColor';
import {
  GameContainer,
  BackButton,
  HeaderGame,
  UserColors,
} from './styled-components/inGameScreenStyled';

export const incrementIndexRowToGuess = ({ indexRowToGuess }) => ({
  indexRowToGuess: indexRowToGuess + 1,
});

export const incrementSelectedColors = color => ({ selectedColors }) => ({
  selectedColors: [...selectedColors, color],
});

export default class InGameScreen extends PureComponent {
  state = {
    indexRowToGuess: 0,
    colorsToGuess: [],
    selectedColors: [],
  };

  componentDidMount = () => this.generateRandomColor();

  generateRandomColor = () => {
    const colorsToGuess = new Array(5)
      .fill(0)
      .map(() => colors[Math.floor(Math.random() * colors.length)]);

    this.setState({
      colorsToGuess,
    });
  };

  onClickUserColor = color => {
    const { selectedColors } = this.state;
    if (selectedColors.length < 5) {
      this.setState(incrementSelectedColors(color));
    }
  };

  generateUsersColor = () =>
    new Array(5)
      .fill(0)
      .map((v, i) => (
        <UserBoxColor
          key={i}
          color={colors[i]}
          onClickUserColor={this.onClickUserColor}
        />
      ));

  changeRowToGuess = () => {
    this.setState(incrementIndexRowToGuess);
    this.setState({ selectedColors: [] });
  };

  setGameIsFinish = isWin => this.props.changeGameState(END_GAME, isWin);

  createGame = () => {
    const { indexRowToGuess, colorsToGuess, selectedColors } = this.state;

    return new Array(12)
      .fill(0)
      .map((v, i) => (
        <MastermindRow
          key={i}
          indexRow={i}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess}
          colorsToGuess={colorsToGuess}
          setGameIsFinish={this.setGameIsFinish}
          selectedColors={selectedColors}
        />
      ));
  };

  onClickSeeRules = () => {
    const { changeGameState } = this.props;
    changeGameState(START_GAME, false);
  };

  render() {
    const { colorsToGuess } = this.state;
    const headerGame = (
      <HeaderGame>
        <BackButton onClick={this.onClickSeeRules}>
          <i className="fas fa-arrow-circle-left" />
        </BackButton>
        <MastermindSolution colorsToGuess={colorsToGuess} />
      </HeaderGame>
    );
    const bodyGame = (
      <div>
        {this.createGame()}
        <UserColors>{this.generateUsersColor()}</UserColors>
      </div>
    );
    return (
      <GameContainer>
        {headerGame}
        {bodyGame}
      </GameContainer>
    );
  }
}

InGameScreen.propTypes = {
  changeGameState: PropTypes.func,
};
