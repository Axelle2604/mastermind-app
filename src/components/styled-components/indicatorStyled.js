import styled from 'styled-components';
import PropTypes from 'prop-types';

export const IndicatorContainer = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ color }) =>
    color === 1 ? 'green' : color === 2 ? 'orange' : 'white'};
`;

IndicatorContainer.propTypes = {
  color: PropTypes.string,
};
