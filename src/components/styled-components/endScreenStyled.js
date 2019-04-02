import styled from 'styled-components';

export const EndGameContainer = styled.div`
  background-color: #e74c3c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  font-size: 50px;
`;

export const RestartButton = styled.button`
  background-color: #2ecc71;
  border-style: none;
  font-size: 30px;
  color: white;
  padding: 20px;
  width: 300px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: #27ae60;
    color: #ecf0f1;
  }
`;
