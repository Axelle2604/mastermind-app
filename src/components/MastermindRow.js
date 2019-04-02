import React, { PureComponent } from 'react';
import Box from './Box';
import Indicator from './Indicator';
import { Row, RowBoxes } from './styled-components/mastermindRowStyled';
import { goodPlaced, missPlaced } from './utils/calculateSolution';

import PropTypes from 'prop-types';

export default class MastermindRow extends PureComponent {
  state = {
    tabColors: [],
    tabIndicators: [],
    isRowToGuess: false,
  };

  componentDidUpdate = () => this.renderColorOnBox();

  static getDerivedStateFromProps = ({ indexRow, indexRowToGuess }) => {
    if (indexRow === indexRowToGuess) {
      return { isRowToGuess: true };
    } else {
      return { isRowToGuess: false };
    }
  };

  checkColorsCombination = () => {
    const { colorsToGuess, selectedColors } = this.props;

    const tabColorsWellPlaced = goodPlaced(selectedColors, colorsToGuess);
    const tabColorsMissPlaced = missPlaced(
      selectedColors,
      colorsToGuess,
      tabColorsWellPlaced
    );

    const wellPlacedResults = Object.values(tabColorsWellPlaced).reduce(
      (total, nb) => total + nb,
      0
    );
    const missPlacedResults = Object.values(tabColorsMissPlaced).reduce(
      (total, nb) => total + nb,
      0
    );

    this.setState(
      {
        tabIndicators: [
          ...new Array(wellPlacedResults).fill(1),
          ...new Array(missPlacedResults).fill(2),
        ],
      },
      () => this.checkGameIsFinish()
    );
  };

  renderColorOnBox = () => {
    const { isRowToGuess } = this.state;
    const { selectedColors, changeRowToGuess } = this.props;
    if (isRowToGuess) {
      this.setState({ tabColors: selectedColors });
      if (selectedColors.length >= 5) {
        this.checkColorsCombination();
        changeRowToGuess();
      }
    }
  };

  checkGameIsFinish = () => {
    const { tabIndicators } = this.state;
    const { setGameIsFinish, indexRowToGuess } = this.props;
    const isEqual = color => color === 1;
    if (tabIndicators.length === 5 && tabIndicators.every(isEqual)) {
      return setGameIsFinish(true);
    } else if (indexRowToGuess === 12) {
      return setGameIsFinish(false);
    }
  };

  createRowBoxes = () => {
    const { tabColors } = this.state;
    return new Array(5)
      .fill(0)
      .map((v, i) => <Box key={i} indexBox={i} color={tabColors[i]} />);
  };

  createRowIndicators = () => {
    const { tabIndicators } = this.state;
    return new Array(5)
      .fill(0)
      .map((value, i) => (
        <Indicator key={i} indexBox={i} color={tabIndicators[i]} />
      ));
  };

  render() {
    const { isRowToGuess } = this.state;

    const rowPlayedIndicator = isRowToGuess && !this.props.isWon && (
      <i className="fas fa-check" />
    );
    return (
      <Row>
        <div>{rowPlayedIndicator}</div>
        <RowBoxes>
          {this.createRowBoxes()}
          {this.createRowIndicators()}
        </RowBoxes>
      </Row>
    );
  }
}

MastermindRow.propTypes = {
  indexRow: PropTypes.number,
  indexRowToGuess: PropTypes.number,
  changeRowToGuess: PropTypes.func,
  colorsToGuess: PropTypes.array,
  setGameIsFinish: PropTypes.func,
  selectedColors: PropTypes.array,
};
