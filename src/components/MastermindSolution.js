import React, { memo } from 'react';
import {
  SolutionContainer,
  Pawn,
  HiddenContainer,
} from './styled-components/mastermindSolutionStyled';
import PropTypes from 'prop-types';

const MastermindSolution = ({ colorsToGuess }) => {
  const generateSolution = () => {
    return new Array(5)
      .fill(0)
      .map((v, i) => <Pawn color={colorsToGuess[i]} key={i} />);
  };

  return (
    <SolutionContainer>
      {generateSolution()}
      <HiddenContainer>
        <span>
          <i className="far fa-eye" /> see solution
        </span>
      </HiddenContainer>
    </SolutionContainer>
  );
};

export default memo(MastermindSolution);

MastermindSolution.propTypes = {
  colorsToGuess: PropTypes.array,
};
