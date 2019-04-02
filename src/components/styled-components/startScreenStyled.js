import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Title = styled.div`
  font-size: 10em;
`;

export const StartScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e74c3c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const RulesContainer = styled.div`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  font-family: 'Ubuntu', sans-serif;
`;

export const StartButton = styled.button`
  background-color: #2ecc71;
  border-style: none;
  width: 10vw;
  font-size: 30px;
  padding: 20px;
  color: white;
  transition: 0.2s;
  border-radius: 20px;
  font-family: 'Ubuntu', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: #27ae60;
    transition: 0.2s;
  }
  &:active {
    transition: 0.2s;
    background-color: #16a085;
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  padding: 30px;
`;

export const ColorIndicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 0 auto;
  border: solid 5px #ecf0f1;
  border-radius: 100px;
  background-color: ${({ color }) => color};
`;

ColorIndicator.propTypes = {
  color: PropTypes.string,
};
