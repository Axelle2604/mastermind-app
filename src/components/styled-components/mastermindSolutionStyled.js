import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SolutionContainer = styled.div`
  display: flex;
  position: relative;
`;

export const HiddenContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    display: none;
  }
`;

export const Pawn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: solid 5px #ea6153;
`;

Pawn.propTypes = {
  color: PropTypes.string,
};
