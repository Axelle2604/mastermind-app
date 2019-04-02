import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Pawn = styled.div`
  width: 50px;
  height: 50px;
  border: solid 5px #ea6153;
  transition: 0.2s;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : 'white')};
`;

Pawn.propTypes = {
  color: PropTypes.string,
};
