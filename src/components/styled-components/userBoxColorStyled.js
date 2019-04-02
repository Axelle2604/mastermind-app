import styled from 'styled-components';
import PropTypes from 'prop-types';

export const UserBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.2s;
  background-color: ${({ color }) => color};
  &:hover {
    cursor: pointer;
    filter: grayscale(50%);
    transition: 0.2s;
  }
`;

UserBox.propTypes = {
  color: PropTypes.string,
};
